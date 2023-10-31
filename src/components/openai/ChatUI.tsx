import { Country } from "@/types/countries.types";
import { ActionIcon, Textarea } from "@mantine/core";
import { IconLoader, IconSend } from "@tabler/icons-react";
import { ChatMessage } from "./ChatMessage";
import { ChatHistory } from "@/types/chat.types";
import { useEffect, useRef } from "react";

interface Props {
    isLoading: boolean;
    message: string;
    history: ChatHistory;
    country: Country;
    onChangeMessage: (message: string) => void;
    onSubmitMessage: () => void;
}

export function ChatUI({
    isLoading,
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

    const onChangeMessageWrapper = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeMessage(event.target.value.substring(0, 150));
    };

    return (
        <section
            className='flex flex-col w-full md:mr-4'
        >
            <div
                className='p-2 bg-blue-500 text-white text-xl rounded-t-md flex-none font-bold'
            >
                Chat about {country.officialName}
            </div>
            <div
                ref={refHistory}
                className='flex-1 flex flex-col gap-2 border-x md:shadow-md p-4 max-h-[550px] overflow-y-visible overflow-hidden'
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