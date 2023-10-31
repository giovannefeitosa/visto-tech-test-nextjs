export interface Country {
    code: string,
    officialName: string;
    nativeName: string;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    latlng: number[];
    borders: string[];
    googleMapsUrl: string;
    population: number;
}
