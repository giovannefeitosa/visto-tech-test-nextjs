import { Country } from "@/types/countries.types";
import { ChatUI } from "./ChatUI";

interface Props {
    country: Country;
    children: JSX.Element;
}

export function ChatProvider({ country, children }: Props) {

    const onSubmitMessage = () => {};

    return (
        <div className='flex gap-4'>
            {children}
            <ChatUI
                country={country}
                onSubmitMessage={onSubmitMessage}
            />
        </div>
    );
}