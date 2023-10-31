import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import '@mantine/core/styles.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <MantineProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
    );
}

export default MyApp;