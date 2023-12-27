<script lang="ts" setup>
definePageMeta({ layout: 'auth' })

const isLogin = ref(true)

const toggleLogin = () => (isLogin.value = !isLogin.value)
</script>

<template>
	<div class="flex items-center justify-center h-screen w-full relative">
		<NuxtImg
			src="/bg-auth.jpg"
			class="absolute inset-0 w-full h-full object-cover z-10"
		/>
		<div
			class="absolute inset-0 w-full h-full z-20 dark:bg-black/40 bg-white/40"
		></div>
		<UCard class="z-50 w-1/2 relative" :ui="{ body: { base: 'flex gap-4' } }">
			<div class="space-y-4 flex-1">
				<h1 class="text-2xl font-bold">
					<template v-if="isLogin">Login</template>
					<template v-else>Register</template>
				</h1>

				<p class="opacity-70">
					<template v-if="isLogin"
						>Please use the following credentials to login</template
					>
					<template v-else>
						Please use the following credentials to register
					</template>
				</p>

				<AuthLogin v-if="isLogin" :toggle-login="toggleLogin" />
				<AuthRegister v-else :toggle-login="toggleLogin" />
			</div>
			<UDivider label="OR" orientation="vertical" class="w-fit" />
			<div class="space-y-4 flex flex-1 flex-col justify-center">
				<UButton color="black" block size="lg">
					<Icon name="mdi:github" class="w-5 h-5" />
					<span>Login with Github</span>
				</UButton>
				<UButton color="black" block size="lg">
					<Icon name="ri:google-fill" class="w-5 h-5" />
					<span>Login with Google</span>
				</UButton>
			</div>
		</UCard>
	</div>
</template>
