import { BasePageHeader } from "./BasePageHeader";

interface Props {
    home?: boolean;
    children: JSX.Element | JSX.Element[];
}

export function BasePage({ home, children }: Props) {
    return (
        <div>
            <BasePageHeader home={home} />
            <main>
                {children}
            </main>
        </div>
    );
}