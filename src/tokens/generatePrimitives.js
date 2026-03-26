// src/tokens/generateTokens.js

import fs from 'fs';
import path from 'path';

// Загружаем JSON
const rawTokens = JSON.parse(
  fs.readFileSync(new URL('./Primitives.tokens.json', import.meta.url), 'utf-8')
);

// Функция для извлечения hex или числа
function extractValue(token) {
  if (!token) return null;

  // Если это алиас (ссылка на другую переменную)
  if (typeof token.$value === 'string' && token.$value.startsWith('{')) {
    const match = token.$value.match(/\{(.+?)\}/);
    if (match) {
      const path = match[1].split('.');
      let val = rawTokens;
      for (const key of path) {
        val = val?.[key];
      }
      return extractValue(val); // Рекурсивно
    }
  }

  // Если это цвет с hex
  if (token.$value?.hex) {
    return token.$value.hex;
  }

  // Если это число
  if (typeof token.$value === 'number') {
    return `${token.$value}px`;
  }

  // Если вложенная структура (например, Colors.color-primary)
  if (typeof token === 'object' && token !== null) {
    for (const key in token) {
      if (key.startsWith('$')) continue;
      const value = extractValue(token[key]);
      if (value) return value;
    }
  }

  return null;
}

// Обход всех токенов и генерация SCSS-переменных
const scssLines = [];

function walk(obj, prefix = '') {
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    const varName = key.replace(/-/g, '_'); // Замена - на _ для SCSS
    const fullPath = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === 'object' && !value.$type && !value.$value) {
      // Это группа (например, Colors, Button)
      walk(value, fullPath);
    } else {
      const extracted = extractValue(value);
      if (extracted) {
        scssLines.push(`$${varName}: ${extracted};`);
      }
    }
  }
}

walk(rawTokens);

// Сохраняем в файл
const outputPath = path.resolve('../css/abstractions/_primitives.scss');
fs.writeFileSync(outputPath, scssLines.join('\n'), 'utf-8');

console.log('✅ SCSS токены сгенерированы:', outputPath);
