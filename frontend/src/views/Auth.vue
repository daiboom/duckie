<template>
	<div class="auth">
		<LoginForm v-if="isLogin" />
		<SignupForm v-else />
		<div @click="isLogin = !isLogin">Btn</div>
	</div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default {
	name: 'Auth',
	components: { LoginForm, SignupForm },
	data() {
		return { isLogin: true }
	},
}
</script>

<style></style>
