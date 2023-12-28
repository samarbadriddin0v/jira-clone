<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite'
import { useAuthStore } from '~/store/auth.store'
import { useLoadingStore } from '~/store/loading.store'

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
	<div
		class="h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50"
	>
		<div class="container mx-auto flex items-center h-full justify-between">
			<NuxtLink to="/" class="flex items-center space-x-1">
				<NuxtImg src="/logo.svg" width="50" height="50" />
				<span class="text-2xl font-medium">Jira software</span>
			</NuxtLink>

			<div class="flex items-center space-x-2">
				<SharedColorMode />
				<template v-if="currentUser.status">
					<UButton color="red" class="font-bold" @click="logout"
						>Log out</UButton
					>
					<NuxtLink to="/documents">
						<UButton color="blue" variant="outline">Documents</UButton>
					</NuxtLink>
					<SharedUserBox />
				</template>
				<template v-else>
					<NuxtLink to="/auth">
						<UButton color="blue"> Get it free </UButton>
					</NuxtLink>
					<NuxtLink to="/auth">
						<UButton color="blue" variant="soft"> Sign In </UButton>
					</NuxtLink>
				</template>
			</div>
		</div>
	</div>
</template>
