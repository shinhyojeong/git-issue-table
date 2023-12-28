import { http } from '~/utils'

export type SortType = 'created' | 'updated' | 'comments'
export type IssueType = 'all' | 'open' | 'close'

export type GetIssueReq = {
  filter?: SortType
  state?: IssueType
}

export type GetIssuesRes = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: 19634607
    node_id: string
    avatar_url: string
    gravatar_id: ''
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  labels: [
    {
      id: number
      node_id: string
      url: string
      name: string
      color: string
      default: boolean
      description: string | null
    }
  ]
  state: IssueType
  locked: boolean
  assignee: string | null
  assignees: []
  milestone: string | null
  comments: 1
  created_at: string
  updated_at: string
  closed_at: string | null
  author_association: string
  active_lock_reason: string | null
  draft: boolean
  pull_request: {
    url: string
    html_url: string
    diff_url: string
    patch_url: string
    merged_at: string | null
  }
  body: string
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: string | null
  state_reason: string | null
}[]

export const getIssues = (params: GetIssueReq) =>
  http.get<GetIssueReq, GetIssuesRes>('/issues', params)
