import { Country } from "@/types/countries.types";
import Image from "next/image";
import { CountryFlag } from "./CountryFlag";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
    country: Country;
}

export function CountryListItem({ country }: Props) {
    return (
        <Link href={`/country/${country.code}/about`}>
            <div
                className="flex gap-2 py-2 px-2 border-b md:border-b md:border-r md:items-center cursor-pointer hover:bg-slate-200 transition-all duration-300"
            >
                <span
                    className='w-8 md:w-12 flex-none'
                >
                    <CountryFlag country={country} />
                </span>
                <span
                    className='text-sm md:text-base'
                >{country.officialName}</span>
                <div className='flex-1' />
                <span>
                    <IconArrowRight color='#ccc' size={24} />
                </span>
            </div>
        </Link>
    );
}