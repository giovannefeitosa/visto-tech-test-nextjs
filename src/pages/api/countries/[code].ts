import { restCountriesConfig } from "@/config/restcountries";
import { parseRCCountry } from "@/lib/parseRCCountry";
import { Country } from "@/types/countries.types";
import { RCCountry } from "@/types/restcountries.types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Country>,
) {
    const cca2 = request.query.code;
    const fields = ['cca2','name','currencies','capital','region','subregion','borders','population','latlng','maps','flags'];
    const url = `${restCountriesConfig.baseUrl}/alpha/${cca2}?fields=${fields.join(',')}`;
    const res = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        },
    });
    const json: RCCountry = await res.json();
    const parsed: Country = parseRCCountry(json);

    response.status(200).json(parsed);
}
