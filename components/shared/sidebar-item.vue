<script setup lang="ts">
import { sidebarItems } from '~/constants'

const route = useRoute()
</script>

<template>
	<NuxtLink v-for="(item, index) in sidebarItems" :key="index" :to="item.url">
		<UButton
			class="w-full text-left h-12 flex justify-start rounded-none"
			:variant="route.fullPath === item.url ? 'solid' : 'ghost'"
			color="blue"
		>
			<Icon :name="item.icon" size="20" class="mr-2" />
			<span>{{ item.name }}</span>
		</UButton>
	</NuxtLink>
</template>
