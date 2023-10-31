import { Country } from "@/types/countries.types";
import Image from "next/image";
import { CountryFlag } from "./CountryFlag";

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
                <CountryFlag country={country} />
            </span>
            <span
                className='text-sm'
            >{country.officialName}</span>
        </div>
    );
}