/**
 * Нормализация телефона для ERP (SmsLoginIssueRequest принимает строку, бэкенд ведёт в E.164).
 * @param {string} rawDigits только цифры или смешанный ввод с поля (до 11 символов как в PhoneInput)
 * @returns {string}
 */
export function formatPhoneForErpApi (rawDigits) {
  const x = String(rawDigits || '').replace(/\D/g, '')
  if (x.length === 11 && x.startsWith('8')) {
    return '+7' + x.slice(1)
  }
  if (x.length === 11 && x.startsWith('7')) {
    return '+' + x
  }
  if (x.length === 10) {
    return '+7' + x
  }
  // 11 цифр без 7/8 в начале (некорректный локальный ввод) — не подставляем «лишнюю» 7
  return x
}
