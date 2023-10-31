import { BasePage } from "@/components/common/BasePage";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { CountryListItem } from "@/components/countries/CountryListItem";
import { SearchInput } from "@/components/form/SearchInput";
import { useApiGet } from "@/hooks/useApiGet";
import { Country } from "@/types/countries.types";
import { Input, LoadingOverlay } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import Head from "next/head";
import React, { useState } from "react";

export default function HomePage() {
  const {
    data,
    errorMessage,
    isLoading,
  } = useApiGet<Country[]>('/countries');

  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 400);
  const filterValue = debounced.toLowerCase();

  const filterHandler = (country: Country) => {
    return country.officialName.toLowerCase().includes(filterValue)
      || country.nativeName.toLowerCase().includes(filterValue)
      || country.currencies.some((currency) => currency.toLowerCase().includes(filterValue))
  }

  let content;

  if (isLoading) {
    content = <LoadingOverlay visible />
  } else if (errorMessage) {
    content = <ErrorMessage message={errorMessage || 'deleteme'} />
  } else {
    content = (
      <>
        <div
          className='p-2'
        >
          <SearchInput
            placeholder='Search countries...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <section
          className="flex flex-col gap-1 pt-4 md:flex-none md:grid md:grid-cols-3 md:gap-0"
        >
        {data!
          .filter(filterHandler)
          .map((country: Country) => <CountryListItem country={country} key={country.code} />)
        };
        </section>
      </>
    )
  }

  return (
    <BasePage home>
      <Head>
        <title>Visto.Countries</title>
        <meta name="description" content="This is a simple project to display a list of countries and know more about them" />
        <meta property="og:title" content="Visto.Countries" />
        <meta property="og:description" content="This is a simple project to display a list of countries and know more about them" />
      </Head>
      {content}
    </BasePage>
  );
}
