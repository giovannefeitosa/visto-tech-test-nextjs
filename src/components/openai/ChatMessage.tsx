import { ChatMessage } from "@/types/chat.types";

interface Props {
    message: ChatMessage;
}

export function ChatMessage({ message }: Props) {
    let className = 'p-4 rounded-lg text-sm max-w-[80%] ';

    if (message.from === 'user') {
        className += 'bg-slate-100';
    } else if (message.from === 'ai') {
        className += 'bg-blue-500 text-white self-end';
    } else if (message.from === 'error') {
        className += 'bg-red-500 text-white self-end';
    }

    return (
        <div
            className={className}
        >{message.text}</div>
    );
}