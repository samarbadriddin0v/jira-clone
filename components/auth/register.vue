<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ACCOUNT, UNIQUE_ID } from '~/libs/appwrite'

const props = defineProps({
	toggleLogin: {
		type: Function,
		required: true,
	},
})

const toast = useToast()

const isLoading = ref(false)
const error = ref('')

const state = reactive({
	name: undefined,
	email: undefined,
	password: undefined,
})

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
	if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
	if (!state.password)
		errors.push({ path: 'password', message: 'Password is required' })
	return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
	isLoading.value = true
	const { name, email, password } = event.data

	try {
		await ACCOUNT.create(UNIQUE_ID, email, password, name)
		props.toggleLogin()
		toast.add({
			title: 'Account created',
			description: 'You can now login with your new account',
		})
		isLoading.value = false
	} catch (e: any) {
		error.value = e.message
		isLoading.value = false
	}
}
</script>

<template>
	<UAlert
		icon="i-heroicons-command-line"
		:description="error"
		title="Error"
		v-if="error"
		color="red"
		variant="outline"
	/>
	<UForm
		:validate="validate"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormGroup label="Name" name="name">
			<UInput v-model="state.name" color="blue" size="lg" />
		</UFormGroup>

		<UFormGroup label="Email" name="email">
			<UInput v-model="state.email" color="blue" size="lg" />
		</UFormGroup>

		<UFormGroup label="Password" name="password">
			<UInput v-model="state.password" type="password" color="blue" size="lg" />
		</UFormGroup>

		<div class="text-sm text-neutral-500">
			Already have an account?
			<span
				class="text-blue-500 hover:underline"
				role="button"
				@click="$props.toggleLogin"
			>
				Sign in
			</span>
		</div>

		<UButton
			type="submit"
			color="blue"
			class="w-full"
			block
			size="lg"
			:disabled="isLoading"
		>
			<template v-if="isLoading">
				<Icon name="svg-spinners:3-dots-fade" class="w-5 h-5" />
			</template>
			<template v-else>Next</template>
		</UButton>
	</UForm>
</template>
