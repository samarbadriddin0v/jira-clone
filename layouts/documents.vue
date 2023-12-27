<template>
	<main>
		<LayoutsNavbar />
		<LayoutsSidebar />
		<section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
			<div class="p-4">
				<slot />
			</div>
		</section>
	</main>
</template>
