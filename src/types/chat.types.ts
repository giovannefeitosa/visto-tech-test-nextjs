export type ChatHistory = ChatMessage[];

export interface ChatMessage {
    from: 'user' | 'ai' | 'error';
    text: string;
    createdAt: Date;
}
