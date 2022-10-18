export type QuestionProps = {
  id: number
  user: {
    id: number
    username: string
  }
  title: string
  description: string
  created_at?: string
  updated_at?: string
}
