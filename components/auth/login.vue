<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

defineProps({
	toggleLogin: {
		type: Function,
		required: true,
	},
})

const state = reactive({
	email: undefined,
	password: undefined,
})

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.email) errors.push({ path: 'email', message: 'Email is requierd' })
	if (!state.password)
		errors.push({ path: 'password', message: 'Password is required' })
	return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}
</script>

<template>
	<UForm
		:validate="validate"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormGroup label="Email" name="email">
			<UInput v-model="state.email" color="blue" size="lg" />
		</UFormGroup>

		<UFormGroup label="Password" name="password">
			<UInput v-model="state.password" type="password" color="blue" size="lg" />
		</UFormGroup>

		<div class="text-sm text-neutral-500">
			Not registered yet?
			<span
				class="text-blue-500 hover:underline"
				role="button"
				@click="$props.toggleLogin"
			>
				Sign up
			</span>
		</div>

		<UButton type="submit" color="blue" class="w-full" block size="lg">
			Submit
		</UButton>
	</UForm>
</template>
