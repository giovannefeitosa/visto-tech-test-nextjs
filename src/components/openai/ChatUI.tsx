import { Country } from "@/types/countries.types";
import { ActionIcon, Textarea } from "@mantine/core";
import { IconLoader, IconSend, IconX } from "@tabler/icons-react";
import { ChatMessage } from "./ChatMessage";
import { ChatHistory } from "@/types/chat.types";
import { useEffect, useRef } from "react";

interface Props {
    isLoading: boolean;
    isDesktop?: boolean;
    isVisible: boolean;
    message: string;
    history: ChatHistory;
    country: Country;
    onChangeMessage: (message: string) => void;
    onSubmitMessage: () => void;
    onToggleVisibility: () => void;
}

export function ChatUI({
    isLoading,
    isDesktop,
    isVisible,
    onToggleVisibility,
    message,
    history,
    country,
    onChangeMessage,
    onSubmitMessage,
}: Props) {
    const refHistory = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refHistory.current) {
            refHistory.current.scrollTop = refHistory.current.scrollHeight;
        }
    }, [history]);

    const wrapperClassName = isDesktop
        ? 'flex-1 flex flex-col md:mr-4'
        : 'flex flex-col fixed bottom-0 left-0 right-0 top-0 bg-white z-10 md:rounded-md md:shadow-md md:border md:overflow-hidden';
    
    let historyClassName = 'flex-1 flex flex-col gap-2 border-x md:shadow-md p-4 overflow-y-visible overflow-hidden ';

    if (isDesktop) historyClassName += 'max-h-[550px]';

    const onChangeMessageWrapper = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeMessage(event.target.value.substring(0, 150));
    };

    const closeButton = !isDesktop && (
        <div
            onClick={onToggleVisibility}
        >
            <IconX size={24} />
        </div>
    );

    if (!isDesktop && !isVisible) return <></>;

    return (
        <section
            className={wrapperClassName}
        >
            <div
                className='flex p-2 bg-blue-500 text-white text-xl rounded-t-md flex-none font-bold'
            >
                <p>Chat about {country.officialName}</p>
                <div className='flex-1' />
                {closeButton}
            </div>
            <div
                ref={refHistory}
                className={historyClassName}
            >
                {history.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </div>
            <div
                className='flex-none'
            >
                <Textarea
                    placeholder='Ask questions about this country...'
                    rows={3}
                    size="16"
                    rightSectionWidth={80}
                    disabled={isLoading}
                    onChange={onChangeMessageWrapper}
                    value={message}
                    rightSection={
                        <div className='pr-2 flex flex-col items-center'>
                            <ActionIcon size={48} onClick={onSubmitMessage} disabled={isLoading}>
                                {isLoading ? <IconLoader size={24} /> : <IconSend size={24} />}
                            </ActionIcon>
                            <span
                                className='text-slate-500 text-sm text-center block pt-2'
                            >{message.length.toString()}/150</span>
                        </div>
                    }
                />
            </div>
        </section>
    );
}