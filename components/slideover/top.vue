<script setup lang="ts">
import dayjs from 'dayjs'
import { useCurrentDealStore } from '~/store/current-deal.store'

const store = useCurrentDealStore()

const isExpanded = ref(false)

const description = store.deal?.description as string

isExpanded.value = description.length > 200 ? true : false

const toggleExpanded = () => {
	isExpanded.value = !isExpanded.value
}
</script>

<template>
	<div class="rounded p-3 dark:bg-gray-800 bg-gray-200">
		<div class="uppercase bold text-xl mb-4 font-medium">About deal</div>

		<SlideoverLabel label-text="Name">
			{{ store.deal?.name }}
		</SlideoverLabel>

		<SlideoverLabel label-text="Status">
			<UBadge color="blue" class="font-bold">
				{{ store.deal?.status }}
			</UBadge>
		</SlideoverLabel>

		<SlideoverLabel label-text="Created at">
			{{ dayjs(store.deal?.$createdAt).format('DD MMM YYYY') }}
		</SlideoverLabel>

		<SlideoverLabel label-text="Description">
			<template v-if="isExpanded">
				<div class="relative group">
					<div
						class="absolute bg-gradient-to-b from-transparent to-gray-800 inset-0"
					></div>
					<p>{{ store.deal?.description.slice(0, 200) }}...</p>
					<div
						role="button"
						class="relative flex justify-center group-hover:opacity-100 transition opacity-0"
						@click="toggleExpanded"
					>
						<Icon name="ic:baseline-arrow-downward" />
					</div>
				</div>
			</template>
			<template v-else
				><div class="group">
					<p>{{ store.deal?.description }}</p>
					<div
						role="button"
						class="relative flex justify-center group-hover:opacity-100 transition opacity-0"
						@click="toggleExpanded"
					>
						<Icon name="ic:baseline-arrow-upward" />
					</div>
				</div>
			</template>
		</SlideoverLabel>
	</div>
</template>
