import React from "react";

interface FakeResourcesHookProps {
    data: any;
    delay: number;
    onMount: boolean;
};

export default function useFakeResources({ data, delay, onMount }: FakeResourcesHookProps) {

    const [loading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (!onMount) return;
        let timeout = setTimeout(() => {
            setIsLoading(false)
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    function triggerLoading(): void {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, delay);
    }

    return [loading ? null : data, loading, triggerLoading]
}