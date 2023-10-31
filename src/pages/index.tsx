import { BasePage } from "@/components/common/BasePage";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { CountryListItem } from "@/components/countries/CountryListItem";
import { SearchInput } from "@/components/form/SearchInput";
import { useApiGet } from "@/hooks/useApiGet";
import { Country } from "@/types/countries.types";
import { Input, LoadingOverlay } from "@mantine/core";
import React from "react";

export default function HomePage() {
  const {
    data,
    errorMessage,
    isLoading,
  } = useApiGet<Country[]>('/countries');

  let content;

  if (isLoading) {
    content = <LoadingOverlay visible />
  } else if (errorMessage) {
    content = <ErrorMessage message={errorMessage || 'deleteme'} />
  } else {
    content = (
      <>
        <SearchInput
          placeholder='Search countries...'
        />
        <section
          className="flex flex-col gap-1 pt-4"
        >
        {data!.map((country: Country) => <CountryListItem country={country} key={country.code} />)};
        </section>
      </>
    )
  }

  return (
    <BasePage>
      {content}
    </BasePage>
  );
}
