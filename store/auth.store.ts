interface User {
	email: string
	name: string
	id: string
	status: boolean
}

const initialState: { user: User } = {
	user: {
		email: '',
		name: '',
		id: '',
		status: false,
	},
}

export const useAuthStore = defineStore('auth', {
	state: () => initialState,
	getters: {
		currentUser: state => state.user,
	},
	actions: {
		set(user: User) {
			this.$patch({ user })
		},
		clear() {
			this.$patch(initialState)
		},
	},
})
