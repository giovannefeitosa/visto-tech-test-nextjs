import { ActionIcon } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";

interface Props {
    isVisible: boolean;
    onClick: () => void;
}

export function FloatingChatButton({
    isVisible,
    onClick,
}: Props) {
    if (!isVisible) return <></>;

    return (
        <div
            className='fixed bottom-4 right-4 z-20'
        >
            <ActionIcon
                variant='filled'
                color='blue'
                size={64}
                onClick={onClick}
            >
                <IconMessage size={32} color='white' />
            </ActionIcon>
        </div>
    );
}