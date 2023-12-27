<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite'
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
</script>

<template>
	<div>
		<UButton>To DO</UButton>
	</div>
</template>
