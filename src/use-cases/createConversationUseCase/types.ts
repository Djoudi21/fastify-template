export type Conversation = {
  title: string
}

type userId = {
  id: number
}

export type ConversationRequestBody = {
  userIds: userId[]
}
