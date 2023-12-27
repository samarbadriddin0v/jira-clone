<script lang="ts" setup>
import { tabs, templates } from '@/constants'
import { useAuthStore } from '~/store/auth.store'

useHead({ title: 'Jira software' })

const { currentUser } = useAuthStore()
</script>

<template>
	<main class="pb-72">
		<!-- HERO SECTION -->
		<section
			class="flex items-center justify-between h-[100vh] pt-[10vh] gap-4 bg-gradient-to-t from-white dark:from-black to-blue-500 dark:to-blue-800"
		>
			<div class="pl-20 flex flex-col space-y-3">
				<h1 class="text-5xl">
					Move fast, stay aligned, and build better - together
				</h1>
				<p class="text-lg opacity-80">
					The #1 software development tool used by agile teams
				</p>
				<template v-if="currentUser.status">
					<NuxtLink to="/documents">
						<UButton color="blue">Documents</UButton>
					</NuxtLink>
				</template>
				<template v-else>
					<NuxtLink to="/auth">
						<UButton color="blue">Try it free</UButton>
					</NuxtLink>
				</template>
			</div>

			<NuxtImg src="/hero.webp" />
		</section>

		<!-- Tab section -->
		<section>
			<h1 class="text-4xl font-medium px-4">
				All from a single source of truth
			</h1>

			<UTabs :items="tabs" class="mt-6 px-4" :ui="{ list: { width: 'w-fit' } }">
				<template #item="{ item }">
					<div class="flex justify-between items-center gap-6 mt-8">
						<div class="w-[40%]">
							<h1 class="text-4xl font-bold">{{ item.label }}</h1>
							<p class="mt-6 text-xl">{{ item.description }}</p>

							<div
								class="py-4 mt-12 rounded-r-full flex flex-col space-y-2 bg-gradient-to-r from-white dark:from-black to-blue-500 dark:to-blue-800"
							>
								<Icon name="bxs:quote-alt-left" class="text-7xl" />
								<p class="text-lg pl-2">{{ item.credentials.text }}</p>
								<div class="pl-2 opacity-70">
									<p class="font-bold">{{ item.credentials.username }}</p>
									<p class="text-sm">{{ item.credentials.company }}</p>
								</div>
							</div>
						</div>

						<NuxtImg :src="item.image" class="w-[60%]" />
					</div>
				</template>
			</UTabs>
		</section>

		<!--  -->
		<section>
			<h1 class="text-4xl font-medium text-center mt-20">Easier than ever</h1>
			<div class="flex items-center justify-between max-w-xl mx-auto mt-4">
				<div
					class="w-16 h-16 bg-blue-500 dark:bg-blue-800 rounded-full flex items-center justify-center"
				>
					<Icon name="material-symbols:file-copy" class="text-white text-4xl" />
				</div>
				<div
					class="flex-1 h-2 bg-gradient-to-r from-blue-500 dark:from-blue-800 to-gray-500 dark:to-gray-800"
				></div>
				<div
					class="w-16 h-16 bg-gray-500 dark:bg-gray-800 rounded-full flex items-center justify-center"
				>
					<Icon
						name="material-symbols-light:linked-services"
						class="text-4xl"
					/>
				</div>
			</div>

			<div class="grid grid-cols-2 mt-20">
				<div class="bg-blue-500 dark:bg-blue-800 p-8">
					<div class="flex flex-col space-y-2 items-center">
						<h1 class="text-2xl font-medium">
							Templates give you a head start
						</h1>
						<p class="text-xl">Get started with ready-made templates.</p>
					</div>

					<div v-for="(item, index) in templates" :key="index">
						<div class="flex flex-col mt-4">
							<div
								class="bg-gray-500 dark:bg-gray-800 flex items-center gap-5 h-20"
							>
								<div
									class="flex justify-center items-center bg-blue-500/30 dark:bg-blue-800/30 p-3 h-full"
								>
									<NuxtImg :src="item.image" class="w-12" />
								</div>
								<div class="flex flex-col space-y-2">
									<h2 class="font-medium text-xl">{{ item.name }}</h2>
									<div
										class="group flex items-center hover:underline"
										role="button"
									>
										<span>Learn more</span>
										<Icon
											name="material-symbols:arrow-right-alt-rounded"
											class="group-hover:translate-x-2 transition"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="py-4 mt-12 rounded-r-full flex flex-col space-y-2 bg-gradient-to-l from-gray-500 dark:from-gray-800 to-blue-500 dark:to-blue-800"
					>
						<Icon name="bxs:quote-alt-left" class="text-7xl" />
						<p class="text-lg pl-2">
							You can decide how you are working as a team first and then let
							the software work around you."
						</p>
						<div class="pl-2 opacity-70">
							<p class="font-bold">MARIA BONORCHIS</p>
							<p class="text-sm">AGILE DELIVERY MANAGER, CANCER RESEARCH UK</p>
						</div>
					</div>
				</div>
				<div class="bg-gray-500 dark:bg-gray-800 p-8">
					<div class="flex flex-col space-y-6 items-center">
						<div class="text-center">
							<h1 class="text-2xl font-medium">Then customize as you grow</h1>
							<p class="text-xl text-center">
								Jira adapts to the way you work, not the other way around. Start
								simple, customize as you go.
							</p>
						</div>
						<NuxtImg src="/product.webp" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
