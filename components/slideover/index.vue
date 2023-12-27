<script setup lang="ts">
import { useCurrentDealStore } from '~/store/current-deal.store'

const store = useCurrentDealStore()

const isLocalOpen = computed({
	get: () => store.isOpen,
	set: value => (store.isOpen = value),
})
</script>

<template>
	<USlideover v-model="isLocalOpen">
		<UCard
			class="flex flex-col flex-1 overflow-y-auto rounded-none"
			:ui="{
				body: { base: 'flex-1' },
				ring: '',
				divide: 'divide-y divide-border',
			}"
		>
			<template #header>
				<SlideoverTop />
			</template>

			<SlideoverComments />
		</UCard>
	</USlideover>
</template>
