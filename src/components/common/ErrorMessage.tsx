import { IconFaceIdError } from "@tabler/icons-react";

interface Props {
    message: string;
}

export function ErrorMessage({ message }: Props) {
    return (
        <div
            className='py-20 text-center flex flex-col items-center'
        >
            <IconFaceIdError size={64} color='red' />
            <p className='pt-2 font-bold text-lg'>{message}</p>
        </div>
    );
}