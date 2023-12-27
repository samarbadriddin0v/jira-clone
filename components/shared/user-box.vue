<script setup lang="ts">
import { useAuthStore } from '@/store/auth.store'
import { useLoadingStore } from '@/store/loading.store'
import { ACCOUNT } from '~/libs/appwrite'

const { currentUser, clear } = useAuthStore()
const loadingStore = useLoadingStore()
const router = useRouter()

const logout = async () => {
	loadingStore.set(true)
	await ACCOUNT.deleteSession('current')
	clear()
	router.push('/auth')
	loadingStore.set(false)
}
</script>

<template>
	<UPopover :popper="{ placement: 'left' }">
		<UAvatar :alt="currentUser.name" class="uppercase" size="lg" />

		<template #panel>
			<div class="p-2 w-72 bg-white dark:bg-black">
				<p class="text-neutral-600 text-sm">{{ currentUser.email }}</p>

				<div class="flex items-center mt-3 space-x-2">
					<div class="rounded-md dark:bg-gray-900 bg-gray-300 p-1">
						<UAvatar :alt="currentUser.name" class="uppercase" />
					</div>
					<p class="capitalize text-[15px]">
						{{ currentUser.name }}'s documents
					</p>
				</div>

				<UDivider class="my-3" />

				<NuxtLink to="/profile">
					<UButton class="w-full" color="blue" variant="ghost">
						Profile</UButton
					>
				</NuxtLink>
				<UButton class="w-full" variant="ghost" color="red" @click="logout">
					Logout</UButton
				>
			</div>
		</template>
	</UPopover>
</template>
