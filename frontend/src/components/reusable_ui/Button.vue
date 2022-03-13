<template>
	<button type="button" @click="onClick">{{ buttonText }}</button>
</template>

<script>
export default {
	name: 'Button',
	props: ['buttonText'],
	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>

<style></style>
