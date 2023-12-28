import { useQuery } from '@tanstack/vue-query'
import { Query } from 'appwrite'
import { COLLECTION_DEALS, DB_ID, status } from '~/constants'
import { DATABASE } from '~/libs/appwrite'
import type { IColumn, IDeal } from '~/types'
import { useAuthStore } from './../store/auth.store'

export const useStatus = () => {
	const { currentUser } = useAuthStore()

	return useQuery({
		queryKey: ['deals'],
		queryFn: () =>
			DATABASE.listDocuments(DB_ID, COLLECTION_DEALS, [
				Query.equal('userId', currentUser.id),
			]),
		select: data => {
			const newBoard: IColumn[] = status.map(item => ({
				...item,
				items: [],
			}))

			const deals = data.documents as unknown as IDeal[]

			for (const deal of deals) {
				const column = newBoard.find(item => item.id === deal.status)

				if (column) {
					column.items.push({
						$createdAt: deal.$createdAt,
						name: deal.name,
						description: deal.description,
						status: deal.status,
						$id: deal.$id,
					})
				}
			}

			return newBoard
		},
	})
}
