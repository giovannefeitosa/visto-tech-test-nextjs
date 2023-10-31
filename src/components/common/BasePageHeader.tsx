import { useMediaQuery } from "@mantine/hooks";
import { IconBrandCitymapper, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
    home?: boolean;
}

export function BasePageHeader({ home }: Props) {
    const isDesktop = useMediaQuery('(min-width: 48em)');
    return (
        <header
            className='flex gap-2 px-2 items-center'
        >
            <IconBrandCitymapper size={isDesktop ? 72 : 48} />
            <span className='block font-bold text-base md:text-2xl'>Visto.Countries</span>
            <div className='flex-1' />
            {!home && (<Link href='/'>
                <IconX size={24} color='black' />
            </Link>)}
        </header>
    );
}