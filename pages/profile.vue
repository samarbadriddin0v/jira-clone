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
	<div class="w-full h-screen flex justify-center items-center">
		<UCard class="w-1/3">
			<h1 class="text-2xl font-bold">Profile.</h1>

			<UDivider class="my-2" />

			<div class="flex items-center space-x-3">
				<UAvatar :alt="currentUser.name" class="uppercase" size="xl" />

				<div class="flex flex-col space-y-1">
					<p class="text-gray-400">
						Name:
						<span class="text-gray-100 font-bold">{{ currentUser?.name }}</span>
					</p>
					<p class="text-gray-400">
						Email:
						<span class="text-gray-100 font-bold">{{
							currentUser?.email
						}}</span>
					</p>
				</div>
			</div>

			<UButton class="w-fit h-10 mt-3" color="red" @click="logout">
				<span class="text-md">Logout</span>
				<Icon name="line-md:logout" size="20" />
			</UButton>
		</UCard>
	</div>
</template>
