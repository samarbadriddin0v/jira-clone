export const useLoadingStore = defineStore('loading', {
	state: () => ({ isLoading: true }),
	actions: {
		set(isLoading: boolean) {
			this.$patch({ isLoading })
		},
	},
})
