import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

// В dev по умолчанию — относительный путь через proxy в quasar.config.js (см. /erp-api → erp.local).
// В preview/production задайте абсолютный URL, например https://erp.example.com/api
const fromEnv = (import.meta.env.VITE_ERP_API_BASE_URL || '').trim().replace(/\/$/, '')
if (!fromEnv && !import.meta.env.DEV) {
	console.warn('[erp-api] Задайте VITE_ERP_API_BASE_URL (база API со суффиксом /api)')
}
const erpApiBaseUrl =
	fromEnv || (import.meta.env.DEV ? '/erp-api/api' : 'http://127.0.0.1:8000/api')

const TOKEN_KEY = 'erp_auth_token'

const api = axios.create({
	baseURL: erpApiBaseUrl,
	headers: {
		Accept: 'application/json',
	},
})

function isSmsPublicPath (url) {
	const path = String(url || '').replace(/^\//, '')
	return path.startsWith('auth/sms/issue')
		|| path.startsWith('auth/sms/login')
		|| path.startsWith('auth/sms/dev-login')
}

api.interceptors.request.use((config) => {
	const siteId = (import.meta.env.VITE_ERP_SITE_ID || '').trim()
	if (siteId) {
		config.headers['X-Site-ID'] = siteId
	}
	const path = config.url || ''
	if (!isSmsPublicPath(path)) {
		const token = typeof localStorage !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : ''
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
	}
	return config
})

export default defineBoot(({ app }) => {
	app.config.globalProperties.$axios = axios

	app.config.globalProperties.$api = api
})

export { api }
