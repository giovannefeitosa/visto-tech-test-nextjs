export interface RCCountry {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    cca2: string;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    region: string;
    subregion: string;
    latlng: number[];
    borders: string[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
}
