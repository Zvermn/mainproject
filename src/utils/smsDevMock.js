/**
 * Режим разработки: без запроса выдачи SMS в ERP, вход по магику на /auth/sms/dev-login.
 * Включать только через VITE_SMS_LOGIN_DEV_MOCK=true (не использовать в production build).
 */
export function isSmsLoginDevMock () {
	if (import.meta.env.PROD) {
		return false
	}
	const v = String(import.meta.env.VITE_SMS_LOGIN_DEV_MOCK || '').toLowerCase()
	return v === 'true' || v === '1'
}

export function smsLoginDevMagicCode () {
	return String(import.meta.env.VITE_SMS_LOGIN_DEV_CODE || '777777')
}
