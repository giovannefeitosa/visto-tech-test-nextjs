export interface Country {
    code: string,
    officialName: string;
    nativeName: string;
    flagImgUrl: string;
    flagImgAlt: string;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    latlng: number[];
    borders: string[];
    googleMapsUrl: string;
    population: number;
}
