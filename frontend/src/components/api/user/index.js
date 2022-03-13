import AJAX from '../../../utils/ajax'

export async function getUsers(userData) {
	console.log('login', userData)
	try {
		const config = {
			method: 'GET',
			url: '/user',
			data: userData,
		}

		const res = await AJAX(config)

		return res
	} catch (err) {
		console.error(err)
	}
}

export async function getUser(userId) {
	console.log('getUser', userId)
	try {
		const config = {
			method: 'GET',
			url: `/user/${userId}`,
		}

		const res = await AJAX(config)

		return res
	} catch (err) {
		console.error(err)
	}
}

export async function createUser(userData) {
	console.log('createUser', userData)
	try {
		const config = {
			method: 'POST',
			url: '/user',
			data: userData,
		}

		const res = await AJAX(config)

		return res
	} catch (err) {
		console.error(err)
	}
}

export async function deleteUser(userId) {
	console.log('deleteUser', userId)
	try {
		const config = {
			method: 'DELETE',
			url: `/user/${userId}`,
		}

		const res = await AJAX(config)
	} catch (err) {
		console.error(err)
	}
}

export async function updateUser(userData) {
	console.log('updateUser', userData)

	try {
		const config = {
			method: 'PUT',
			url: `/user/${userData.userId}`,
			data: userData,
		}

		const res = await AJAX(config)
	} catch (err) {
		console.error(err)
	}
}
