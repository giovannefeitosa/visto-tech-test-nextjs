import Head from "next/head";
import { BasePageHeader } from "./BasePageHeader";

interface Props {
    home?: boolean;
    children: JSX.Element | JSX.Element[];
}

export function BasePage({ home, children }: Props) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta property="og:image" content="/favicon.png" />
            </Head>
            <BasePageHeader home={home} />
            <main>
                {children}
            </main>
        </div>
    );
}