import { useEffect, useState } from "react";

interface UseApiGetReturn<T> {
    data: T | undefined;
    errorMessage: string;
    isLoading: boolean;
}

export function useApiGet<T>(uri: string): UseApiGetReturn<T> {
    const [data, setData] = useState<T | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`/api${uri}`)
            .then(res => {
                if (!res.ok) {
                    res.text().then(text => {
                        setErrorMessage(`Error: ${text}`);
                        setIsLoading(false);
                        setData(undefined);
                    });
                    return;
                }

                res.json().then((json: T) => {
                    setData(json);
                    setIsLoading(false);
                    setErrorMessage('');
                });
            }).catch(e => {
                setIsLoading(false);
                setErrorMessage(`Unknown error: ${String(e)}`);
            });
    }, [uri]);

    return { data, errorMessage, isLoading };
}