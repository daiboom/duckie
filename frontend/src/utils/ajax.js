import axios from 'axios'

export const METHOD = {
	GET: 'GET',
	POST: 'POST',
	PATCH: 'PATCH',
	PUT: 'PUT',
	DELETE: 'DELETE',
}

const instance = axios.create({
	baseURL: 'http://localhost:4000/api/',
	headers: {
		// Authorization: StorageEvent.state.token,
	},
})

async function AJAX({ method, url, param = {}, data = {} }) {
	try {
		const config = {
			method: method || 'GET',
			url,
			param,
			data,
		}

		console.log(config)
		const response = await instance(config)
		return response
	} catch (error) {
		console.error(error)
		throw error
	}
}

export default AJAX
