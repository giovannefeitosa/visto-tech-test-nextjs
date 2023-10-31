import { useMediaQuery } from "@mantine/hooks";
import { IconBrandCitymapper } from "@tabler/icons-react";

export function BasePageHeader() {
    const isDesktop = useMediaQuery('(min-width: 48em)');
    return (
        <header
            className='flex gap-2 px-2 items-center'
        >
            <IconBrandCitymapper size={isDesktop ? 72 : 48} />
            <span className='block font-bold text-base md:text-2xl'>Visto.Countries</span>
        </header>
    );
}