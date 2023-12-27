import { EnumStatus } from '~/types'

export const DB_ID = 'jira-db'
export const COLLECTION_DEALS = 'deals'
export const COLLECTION_COMMENTS = 'comments'

export const tabs = [
	{
		label: 'Plan',
		description:
			'Break the big ideas down into manageable chunks across teams with user stories, issues, and tasks.',
		image: '/Board.png',
		credentials: {
			text: "Work becomes a lot more visible when it's all in one place. It makes collaboration a whole lot easier.",
			username: 'JEFF LAI',
			company: 'INTERNAL INFRASTRUCTURE, CANVA',
		},
	},
	{
		label: 'Track',
		description:
			'Prioritize and discuss your team’s work in context with complete visibility at every level.',
		image: '/Timeline.png',
		credentials: {
			text: 'The pace of delivery from idea to reality has exploded.',
			username: 'GREG FRANKLIN',
			company: 'AGILE LEAD, CANCER RESEARCH UK',
		},
	},
	{
		label: 'Release',
		description:
			'Ship faster, with confidence knowing the information you have is always up-to-date.',
		image: '/Releases.png',
		credentials: {
			text: 'Less friction in the development process means better results and a faster time to market.',
			username: 'LOUIS BENNETT',
			company: 'DIRECTOR OF ENGINEERING, TRULIA',
		},
	},
	{
		label: 'Report',
		description:
			'Improve team performance in context, based on real-time, visual data.',
		image: '/Insights.png',
		credentials: {
			text: 'Full visibility in Jira across the whole organization enables you to make better management judgment.',
			username: 'PAUL LEAON',
			company: 'DIGITAL PORTFOLIO DIRECTOR, INCHCAPE',
		},
	},
	{
		label: 'Automate',
		description:
			'Save time, keep your team focused, and help work flow with no-code automation.',
		image: '/Automation.png',
		credentials: {
			text: 'We’re saving 150 hours+ of valuable engineering time per month.',
			username: 'JEFF LAI',
			company: 'INTERNAL INFRASTRUCTURE, CANVA',
		},
	},
]

export const templates = [
	{
		name: 'Scrum',
		image: '/scrum.svg',
	},
	{
		name: 'Kanban',
		image: '/documents.svg',
	},
	{
		name: 'Bug tracking',
		image: '/bug.svg',
	},
	{
		name: 'DevOps',
		image: '/devops.svg',
	},
]

export const sidebarItems = [
	{
		name: 'Dashboards',
		url: '/documents',
		icon: 'radix-icons:dashboard',
	},
	{
		icon: 'ri:todo-fill',
		name: 'To Do',
		url: '/documents/to-do',
	},
	{
		icon: 'game-icons:progression',
		name: 'In Progress',
		url: '/documents/in-progress',
	},
	{
		icon: 'eos-icons:product-subscriptions',
		name: 'Produced',
		url: '/documents/produced',
	},
	{
		icon: 'ic:baseline-cloud-done',
		name: 'Done',
		url: '/documents/done',
	},
]

export const status = [
	{
		id: EnumStatus.todo,
		name: 'To do',
		items: [],
	},
	{
		id: EnumStatus['in-progress'],
		name: 'In progress',
		items: [],
	},
	{
		id: EnumStatus.produced,
		name: 'Produced',
		items: [],
	},
	{
		id: EnumStatus.done,
		name: 'Done',
		items: [],
	},
]
