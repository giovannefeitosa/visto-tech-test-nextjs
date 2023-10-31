import { Country } from "@/types/countries.types";
import Image from "next/image";

interface Props {
    country: Country;
}

export function CountryFlag({ country }: Props) {
    return (
        <Image
            src={country.flagImgUrl}
            alt={country.flagImgAlt}
            width={1060}
            height={742}
            layout="responsive"
        />
    );
}