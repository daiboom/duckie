<template>
	<div>
		<label :for="id">{{ label }}</label>
		<span>&nbsp;</span>
		<input
			:id="id"
			:type="type"
			:value="value"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: 'input',
	props: ['label', 'type', 'value', 'id', 'placeholder'],
}
</script>

<style></style>
