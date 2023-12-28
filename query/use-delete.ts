import { useMutation } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/constants'
import { DATABASE } from '~/libs/appwrite'

export const useDelete = (refetch: Function) => {
	const toast = useToast()

	const { isPending, mutate } = useMutation({
		mutationKey: ['delete-deals'],
		mutationFn: (id: string) =>
			DATABASE.deleteDocument(DB_ID, COLLECTION_DEALS, id),
		onSuccess: () => {
			refetch()
			toast.add({
				title: 'Success',
				description: 'Deal deleted successfully',
			})
		},
		onError: () => {
			toast.add({
				title: 'Error',
				description: 'Failed to delete deal',
			})
		},
	})

	return { deleteDeal: mutate, isDeleting: isPending }
}
