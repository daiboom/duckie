<template>
	<div>
		LoginForm
		<Input
			label="email"
			type="email"
			id="email"
			v-model="email"
			placeholder="email"
		/>
		<Input
			label="password"
			type="password"
			id="password"
			v-model="password"
			placeholder="password"
		/>
		<Button buttonText="Log in" @onClick="handleLogin" />
	</div>
</template>

<script>
import Input from './reusable_ui/Input.vue'
import Button from './reusable_ui/Button.vue'
import { login } from './api'

export default {
	name: 'LoginForm',
	components: { Input, Button },
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		handleLogin: async function () {
			try {
				const userData = {
					user: this.email,
					password: this.password,
				}

				const { data } = await login(userData)

				console.log(data)
			} catch (error) {
				console.error(error)
			}
		},
	},
}
</script>

<style></style>
