import { BasePageHeader } from "./BasePageHeader";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export function BasePage({ children }: Props) {
    return (
        <div>
            <BasePageHeader />
            <main>
                {children}
            </main>
        </div>
    );
}