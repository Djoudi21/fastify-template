export interface ConversationRepository {
  createConversation(newConversationWithUserIds: any): Promise<any>

  listConversationsByUserId(userId: any): Promise<any>
}
