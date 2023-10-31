import { Country } from "@/types/countries.types";
import { RCCountry } from "@/types/restcountries.types";

export function parseRCCountry(rawCountry: RCCountry): Country {
    return {
        code: rawCountry.cca2,
        officialName: rawCountry.name.official,
        nativeName: getNativeName(rawCountry),
        currencies: getCurrencies(rawCountry),
        capital: rawCountry.capital,
        region: rawCountry.region,
        subregion: rawCountry.subregion,
        latlng: rawCountry.latlng,
        borders: rawCountry.borders,
        googleMapsUrl: rawCountry.maps.googleMaps,
        population: rawCountry.population,
    };
}

function getNativeName(country: RCCountry): string {
    try {
        const key = Object.keys(country.name.nativeName)[0];
        return country.name.nativeName[key].official;
    } catch(e) {
        console.error('Country without Native Name: ', country.name);
        return '';
    }
}

function getCurrencies(country: RCCountry): string[] {
    const keys: string[] = Object.keys(country.currencies);
    return keys.map(key => `${key} (${country.currencies[key].symbol})`)
}
