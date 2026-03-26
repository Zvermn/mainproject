import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_KEY = 'erp_auth_token'
const USER_KEY = 'erp_auth_user_json'

export const useErpAuthStore = defineStore('erpAuth', () => {
	const token = ref(typeof localStorage !== 'undefined' ? (localStorage.getItem(TOKEN_KEY) || '') : '')
	const userJson = ref(typeof localStorage !== 'undefined' ? (localStorage.getItem(USER_KEY) || '') : '')

	const user = computed(() => {
		try {
			return userJson.value ? JSON.parse(userJson.value) : null
		} catch {
			return null
		}
	})

	const isAuthenticated = computed(() => Boolean(token.value))

	function setSession (newToken, userPayload) {
		token.value = newToken || ''
		const u = userPayload ?? null
		userJson.value = u ? JSON.stringify(u) : ''
		if (typeof localStorage === 'undefined') {
			return
		}
		if (newToken) {
			localStorage.setItem(TOKEN_KEY, newToken)
		} else {
			localStorage.removeItem(TOKEN_KEY)
		}
		if (u) {
			localStorage.setItem(USER_KEY, userJson.value)
		} else {
			localStorage.removeItem(USER_KEY)
		}
	}

	function clearSession () {
		setSession('', null)
	}

	return {
		token,
		user,
		isAuthenticated,
		setSession,
		clearSession,
	}
})
