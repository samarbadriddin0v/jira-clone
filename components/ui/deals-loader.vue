<template>
	<div class="flex flex-col">
		<div class="text-center">
			<Icon name="svg-spinners:3-dots-fade" class="w-5 h-5" />
		</div>
		<div class="my-3 dark:bg-gray-900 bg-gray-300 rounded-md p-2 animation">
			<USkeleton class="w-10/12 h-4" />
			<USkeleton class="w-full h-1 my-3" />
			<USkeleton class="w-full h-8" />
			<USkeleton class="w-full h-6 mt-3" />
		</div>
	</div>
</template>
