import { BasePage } from "@/components/common/BasePage";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { CountryDetailRow } from "@/components/countries/CountryDetailRow";
import { CountryFlag } from "@/components/countries/CountryFlag";
import { ChatProvider } from "@/components/openai/ChatProvider";
import { useApiGet } from "@/hooks/useApiGet";
import { Country } from "@/types/countries.types";
import { LoadingOverlay } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AboutCountryPage() {
    const router = useRouter()
    const { code } = router.query;
    const countryCode = code as string;

    if (!countryCode) return <></>;

    return <AboutCountryPageInner countryCode={countryCode} />;
}

interface AboutCountryPageInnerProps {
    countryCode: string;
}

function AboutCountryPageInner({ countryCode }: AboutCountryPageInnerProps) {
    const {
        data: country,
        errorMessage,
        isLoading,
    } = useApiGet<Country>(`/countries/${countryCode}`);

    let content;

    if (isLoading) {
        content = <LoadingOverlay visible />;
    } else if (errorMessage) {
        return <ErrorMessage message={errorMessage} />;
    } else if (!country) {
        return <></>;
    } else {
        content = (
            <ChatProvider country={country}>
                <section
                    className='bg-slate-100 p-2 md:rounded-md max-w-md w-full flex-none md:ml-4 md:shadow-md md:border'
                >
                    <h1
                        className='pb-2 font-bold text-xl text-center'
                    >{country.officialName}</h1>
                    <CountryFlag country={country} />
                    <div
                        className='pt-2'
                    >
                        <CountryDetailRow
                            label='Native name'
                            value={country.nativeName}
                        />
                        <CountryDetailRow
                            label='Currencies'
                            value={country.currencies.join(', ')}
                        />
                        <CountryDetailRow
                            label='Capital'
                            value={country.capital.join(', ')}
                        />
                        <CountryDetailRow
                            label='Region'
                            value={country.region}
                        />
                        <CountryDetailRow
                            label='Subregion'
                            value={country.subregion}
                        />
                        <CountryDetailRow
                            label='Lat/Long'
                            value={country.latlng.toString()}
                        />
                        <CountryDetailRow
                            label='Bordering countries'
                            value={country.borders.join(', ')}
                        />
                        <CountryDetailRow
                            label='Population'
                            value={country.population.toLocaleString()}
                        />
                        <CountryDetailRow
                            label='Google Maps'
                            value={(
                                <a
                                    href={country.googleMapsUrl}
                                    className='text-blue-500 font-bold'
                                    target='_blank'
                                >
                                    Open Google Maps
                                </a>
                            )}
                        />
                    </div>
                </section>
            </ChatProvider>
        );
    }

    return (
        <BasePage>
            {content}
        </BasePage>
    );
};
