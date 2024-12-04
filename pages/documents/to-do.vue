<script setup lang="ts">
import { useCurrentDealStore } from '@/store/current-deal.store'
import { useDeals } from '~/query/use-deals'
import { useDelete } from '~/query/use-delete'
import { useEditDealStore } from '~/store/edit-deal.store'
import { EnumStatus } from '~/types'

definePageMeta({ layout: 'documents' })
useHead({ title: 'To Do | Jira software' })

const { set } = useCurrentDealStore()
const editDeal = useEditDealStore()
const { data, isLoading, refetch } = useDeals(EnumStatus.todo)
const { isDeleting, deleteDeal } = useDelete(refetch)

const handleDelete = (id: string) => {
	const confirm = window.confirm('Are you sure you want to delete this deal?')
	if (confirm) return deleteDeal(id)
}
</script>

<template>
	<div class="flex items-center justify-between">
		<h1 class="text-4xl font-bold">To Do</h1>
		<SharedCreateDeal :status="EnumStatus.todo" :refetch="refetch" />
	</div>

	<UDivider class="my-2" />

	<div class="grid grid-cols-4 gap-2" v-if="isLoading">
		<div
			class="my-3 dark:bg-gray-900 bg-gray-300 rounded-md p-2 animation"
			v-for="(item, index) in Array.from({ length: 4 })"
			:key="index"
		>
			<USkeleton class="w-10/12 h-4" />
			<USkeleton class="w-full h-1 my-3" />
			<USkeleton class="w-full h-8" />
			<USkeleton class="w-full h-6 mt-3" />
		</div>
	</div>

	<div v-else>
		<div v-if="data?.length">
			<div class="grid grid-cols-4 gap-2">
				<div class="my-3 dark:bg-gray-900 bg-gray-100 rounded-md p-2 animation" v-for="(item, index) in data" :key="item.$id">
					<div class="flex items-center justify-between" role="button" @click="set(item)">
						<span class="font-bold text-lg uppercase">{{ item.name }}</span>
						<div class="bg-opacity-50 dark:bg-gray-800 bg-gray-300 size-10 flex justify-center items-center">
							<Icon name="material-symbols:edit" size="20" />
						</div>
					</div>

					<UDivider class="my-2" />

					<div class="opacity-55 text-sm line-clamp-1">
						{{ item.description }}
					</div>

					<div class="grid grid-cols-2 gap-2 mt-2">
						<UButton block color="blue" @click="editDeal.set(item)"> Edit </UButton>
						<UButton block color="red" @click="() => handleDelete(item.$id)" :disabled="isDeleting"> Delete </UButton>
					</div>
				</div>

				<Slideover />
				<SharedEditDeal :refetch="refetch" />
			</div>
		</div>

		<div v-else>
			<div class="flex flex-col items-center justify-center">
				<NuxtImg src="/no-data.svg" width="300" height="300" />
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}
	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.3s ease-in-out;
}
</style>
