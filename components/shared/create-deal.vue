<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useMutation } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/constants'
import { DATABASE, UNIQUE_ID } from '~/libs/appwrite'
import { useAuthStore } from '~/store/auth.store'
import type { ICreateDeals } from '~/types'

const props = defineProps({
	status: {
		type: String,
		default: '',
		required: true,
	},
	refetch: {
		type: Function,
		required: true,
	},
})

const toast = useToast()
const { currentUser } = useAuthStore()

const state = reactive({
	name: undefined,
	description: undefined,
	isOpen: false,
})

function handleClickOutside(event: MouseEvent) {
	const popover = document.querySelector('.popover-container') // Adjust selector based on your popover class
	if (popover && !popover.contains(event.target as Node)) {
		state.isOpen = false
	}
}

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.name) errors.push({ path: 'name', message: 'Name is requierd' })
	if (!state.description) errors.push({ path: 'description', message: 'Description is required' })
	return errors
}

const { isPending, mutate } = useMutation({
	mutationKey: ['create-deal'],
	mutationFn: (data: ICreateDeals) => DATABASE.createDocument(DB_ID, COLLECTION_DEALS, UNIQUE_ID, data),
	onSuccess: () => {
		props.refetch()
		state.name = undefined
		state.description = undefined
		state.isOpen = false
		toast.add({ title: 'Success', description: 'Deal created successfully' })
	},
	onError: () => {
		toast.add({ title: 'Error', description: 'Something went wrong', color: 'red' })
	},
})

async function onSubmit(event: FormSubmitEvent<any>) {
	const { name, description } = event.data

	mutate({ name, description, status: props.status, userId: currentUser.id })
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
	document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
	<div class="popover-container relative">
		<UPopover :popper="{ placement: 'bottom' }" :open="state.isOpen">
			<UButton
				variant="ghost"
				class="opacity-75 hover:opacity-100 mx-auto mt-3"
				color="blue"
				@click="state.isOpen = !state.isOpen"
			>
				<Icon name="radix-icons:plus-circled" size="35" />
			</UButton>

			<template #panel>
				<div class="p-4 w-80 dark:bg-gray-900 bg-gray-100">
					<UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
						<UFormGroup label="Name" name="name">
							<UInput v-model="state.name" color="blue" size="lg" />
						</UFormGroup>

						<UFormGroup label="Description" name="description">
							<UTextarea v-model="state.description" color="blue" size="lg" />
						</UFormGroup>

						<UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isPending">
							<template v-if="isPending">
								<Icon name="svg-spinners:3-dots-fade" class="w-5 h-5" />
							</template>
							<template v-else>Submit</template>
						</UButton>
					</UForm>
				</div>
			</template>
		</UPopover>
	</div>
</template>
