import { Country } from "@/types/countries.types";
import { ActionIcon, Textarea } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { ChatMessage } from "./ChatMessage";

interface Props {
    country: Country;
    onSubmitMessage: () => void;
}

export function ChatUI({
    country,
    onSubmitMessage,
}: Props) {
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
                className='flex-1 flex flex-col gap-2 border-x md:shadow-md p-4'
            >
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'user',
                        text: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet'
                    }}
                />
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'user',
                        text: 'Lorem Ipsum'
                    }}
                />
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'ai',
                        text: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet'
                    }}
                />
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'ai',
                        text: 'Lorem Ipsum'
                    }}
                />
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'error',
                        text: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet'
                    }}
                />
                <ChatMessage
                    message={{
                        createdAt: new Date(),
                        from: 'error',
                        text: 'Lorem Ipsum'
                    }}
                />
            </div>
            <div
                className='flex-none'
            >
                <Textarea
                    placeholder='Ask questions about this country...'
                    rows={3}
                    size="16"
                    rightSectionWidth={80}
                    rightSection={
                        <div className='pr-2 flex flex-col items-center'>
                            <ActionIcon size={48} onClick={onSubmitMessage}>
                                <IconSend size={24} />
                            </ActionIcon>
                            <span
                                className='text-slate-500 text-sm text-center block pt-2'
                            >0/150</span>
                        </div>
                    }
                />
            </div>
        </section>
    );
}