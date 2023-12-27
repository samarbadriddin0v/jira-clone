<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite'
import { useStatusQuery } from '~/query/use-status-query'
import { useAuthStore } from '~/store/auth.store'
import { useLoadingStore } from '~/store/loading.store'

definePageMeta({ layout: 'documents' })
useHead({ title: 'Documents | Jira software' })

const router = useRouter()
const loadingStore = useLoadingStore()
const authStore = useAuthStore()

onMounted(() => {
	ACCOUNT.get()
		.then(response => {
			loadingStore.set(false)
			authStore.set({
				email: response.email,
				id: response.$id,
				name: response.name,
				status: response.status,
			})
		})
		.catch(() => router.push('/auth'))
})

const { data, isLoading } = useStatusQuery()
</script>

<template>
	<div class="grid grid-cols-4 gap-2 mt-12" v-if="isLoading">
		<USkeleton class="h-12 bg-gray-900" />
		<USkeleton class="h-12 bg-gray-900" />
		<USkeleton class="h-12 bg-gray-900" />
		<USkeleton class="h-12 bg-gray-900" />

		<UiDealsLoader />
		<UiDealsLoader />
		<UiDealsLoader />
		<UiDealsLoader />
	</div>

	<div class="grid grid-cols-4 gap-2 mt-12" v-else>
		<div v-for="item in data" :key="item.id">
			<UButton class="w-full h-12" color="blue" variant="outline">
				<div class="flex items-center space-x-2">
					<span class="font-bold">{{ item.name }}</span>
					<span class="text-sm text-neutral-500">{{ item.items.length }}</span>
				</div>
			</UButton>

			<div
				class="my-3 bg-gray-900 rounded-md p-2"
				v-for="card in item.items"
				:key="card.$id"
				role="button"
				draggable="true"
			>
				<div class="flex items-center space-x-2">
					<span class="font-bold text-lg uppercase">{{ card.name }}</span>
				</div>

				<UDivider class="my-3" />

				<div class="opacity-55 text-sm line-clamp-1">
					{{ card.description }}
				</div>

				<UButton color="blue" class="w-full mt-3 group" variant="ghost">
					<span class="font-bold">More details</span>
					<Icon
						name="material-symbols:arrow-right-alt-rounded"
						class="group-hover:translate-x-2 transition"
					/>
				</UButton>
			</div>
		</div>
	</div>
</template>
