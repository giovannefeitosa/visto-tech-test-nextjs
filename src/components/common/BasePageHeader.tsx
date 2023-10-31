import { IconBrandCitymapper } from "@tabler/icons-react";

export function BasePageHeader() {
    return (
        <header
            className='flex gap-2 px-2 items-center'
        >
            <IconBrandCitymapper size={48} />
            <span className='font-bold text-base'>Visto.Countries</span>
        </header>
    );
}