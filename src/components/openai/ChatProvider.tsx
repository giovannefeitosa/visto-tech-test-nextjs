import { Country } from "@/types/countries.types";
import { ChatUI } from "./ChatUI";
import { useState } from "react";
import { ChatHistory, ChatMessage } from "@/types/chat.types";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FloatingChatButton } from "./FloatingChatButton";

interface Props {
    country: Country;
    children: JSX.Element;
}

export function ChatProvider({ country, children }: Props) {
    const isDesktop = useMediaQuery('(min-width: 800px)');
    const [isVisible, { toggle }] = useDisclosure(false);
    const [history, setHistory] = useState<ChatHistory>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const wrapperClassName = isDesktop
        ? 'flex gap-4 justify-center pb-28'
        : 'flex gap-4 justify-center';

    const childrenWrapperClassName = isDesktop
        ? 'max-w-md w-full flex-shrink-1 mr-4'
        : 'max-w-md w-full';

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
        <div className={wrapperClassName}>
            <div className={childrenWrapperClassName}>
                {children}
            </div>
            <FloatingChatButton
                isVisible={!isDesktop && !isVisible}
                onClick={toggle}
            />
            <ChatUI
                isDesktop={isDesktop}
                isVisible={isDesktop || isVisible}
                isLoading={isLoading}
                message={message}
                history={history}
                country={country}
                onChangeMessage={setMessage}
                onSubmitMessage={onSubmitMessage}
                onToggleVisibility={toggle}
            />
        </div>
    );
}