export interface MessageRepository {
  createMessage(): Promise<any>

  listMessagesByConversationId(conversationId: any): Promise<any>
}
