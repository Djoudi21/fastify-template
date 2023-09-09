import { User } from '@prisma/client'

export type Conversation = {
  title: string
}

export type ConversationRequestBody = {
  title: string
  userIds: User['id'][]
}
