<template>
	<div>
		<Input label="email" type="email" id="email" v-model="email" />
		<Input label="password" type="password" id="password" v-model="password" />
		<Input
			label="passwordConfirm"
			type="password"
			id="passwordConfirm"
			v-model="passwordConfirm"
		/>
		<Button buttonText="Signup" @onClick="handleSignup" />
	</div>
</template>

<script>
import Input from './reusable_ui/Input.vue'
import Button from './reusable_ui/Button.vue'
import { createUser } from './api'
export default {
	name: 'SignupForm',
	components: { Input, Button },
	data() {
		return {
			email: 'signup mail',
			password: '2',
			passwordConfirm: '3',
		}
	},
	methods: {
		handleSignup: async function () {
			const userData = { email: this.email, password: this.password }
			const res = await createUser(userData)
			console.log('handleSignup res: ', res)
		},
	},
}
</script>

<style></style>
