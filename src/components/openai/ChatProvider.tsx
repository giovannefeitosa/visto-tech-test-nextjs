import { Country } from "@/types/countries.types";
import { ChatUI } from "./ChatUI";
import { useState } from "react";
import { ChatHistory, ChatMessage } from "@/types/chat.types";

interface Props {
    country: Country;
    children: JSX.Element;
}

export function ChatProvider({ country, children }: Props) {
    const [history, setHistory] = useState<ChatHistory>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmitMessage = async () => {
        setIsLoading(true);
        setHistory(history => [...history, {
            createdAt: new Date(),
            from: 'user',
            text: message,
        }]);
        const res = await fetch('/api/openai/sendMessage', {
            method: 'POST',
            body: JSON.stringify({
                message,
                history,
                countryName: country.officialName,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        const answer: ChatMessage = await res.json();
        setHistory(history => [...history, answer]);
        setIsLoading(false);
        setMessage('');
    };

    return (
        <div className='flex gap-4'>
            {children}
            <ChatUI
                isLoading={isLoading}
                message={message}
                history={history}
                country={country}
                onChangeMessage={setMessage}
                onSubmitMessage={onSubmitMessage}
            />
        </div>
    );
}