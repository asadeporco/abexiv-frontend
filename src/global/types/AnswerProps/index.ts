export type AnswerProps = {
  id: number
  title: string
  description: string
  question: number
  user: {
    id: number
    username: string
  }
  created_at?: string
  updated_at?: string
}
