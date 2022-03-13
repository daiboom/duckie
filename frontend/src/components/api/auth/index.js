import AJAX from '../../../utils/ajax'

/**
 * function login
 */
export async function login(userData) {
	console.log('login', userData)
	try {
		const config = {
			method: 'POST',
			url: '/auth/login',
			data: userData,
		}

		const res = await AJAX(config)
	} catch (err) {
		console.error(err)
	}
}

export async function logout() {
	try {
		const res = await AJAX({ method: 'GET' })
	} catch (err) {
		console.error(err)
	}
}
