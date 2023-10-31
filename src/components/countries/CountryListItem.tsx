import { Country } from "@/types/countries.types";
import Image from "next/image";

interface Props {
    country: Country;
}

export function CountryListItem({ country }: Props) {
    return (
        <div
            className="flex gap-2 py-2 px-2 border-b"
        >
            <span
                className='w-8 flex-none'
            >
                <Image
                    src={country.flagImgUrl}
                    alt={country.flagImgAlt}
                    width={1060}
                    height={742}
                />
            </span>
            <span
                className='text-sm'
            >{country.officialName}</span>
        </div>
    );
}