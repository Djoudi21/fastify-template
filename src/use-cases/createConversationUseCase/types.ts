export type Conversation = {
  title: string
  id: string | number
}

type userId = {
  id: number
}

export type ConversationRequestBody = {
  userIds: userId[]
}
