import { restCountriesConfig } from "@/config/restcountries";
import { parseRCCountry } from "@/lib/parseRCCountry";
import { Country } from "@/types/countries.types";
import { RCCountry } from "@/types/restcountries.types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Country[]>,
) {
    const fields = ['cca2','name','currencies','capital','region','subregion','borders','population','latlng','maps'];
    const url = `${restCountriesConfig.baseUrl}/all?fields=${fields.join(',')}`;
    const res = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        },
    });
    const json: RCCountry[] = await res.json();
    const parsed: Country[] = json.map(parseRCCountry);

    response.status(200).json(parsed);
}
