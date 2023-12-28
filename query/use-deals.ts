import { useAuthStore } from '@/store/auth.store'
import { useQuery } from '@tanstack/vue-query'
import { Query } from 'appwrite'
import { COLLECTION_DEALS, DB_ID } from '~/constants'
import { DATABASE } from '~/libs/appwrite'
import type { EnumStatus, IDeal } from '~/types'

export const useDeals = (status: EnumStatus) => {
	const { currentUser } = useAuthStore()

	return useQuery({
		queryKey: ['deals', status],
		queryFn: () =>
			DATABASE.listDocuments(DB_ID, COLLECTION_DEALS, [
				Query.equal('userId', currentUser.id),
				Query.equal('status', status),
			]),
		select: data => {
			const deals = data.documents as unknown as IDeal[]

			return deals.map(deal => ({
				$createdAt: deal.$createdAt,
				$id: deal.$id,
				name: deal.name,
				description: deal.description,
				status: deal.status,
			}))
		},
	})
}
