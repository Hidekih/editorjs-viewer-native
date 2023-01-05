import { useCallback } from "react";

export const useParseHtmlTags = () => {
    const parseHtmlTags = useCallback((value: string) => {
        // Todo
        return "Todo";
    }, []);

    return {
        parseHtmlTags,
    };
}