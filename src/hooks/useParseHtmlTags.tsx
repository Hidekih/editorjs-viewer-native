import { createElement, ReactNode, Fragment, useMemo, useCallback } from "react";
import { Text } from "react-native";

import { decode } from "html-entities";

import Strong from "../components/Strong";
import Code from "../components/Code";
import Italic from "../components/Italic";
import Mark from "../components/Mark";

export const useParseHtmlTags = () => {
    const defaultListTags = useMemo(() => [
        "b",
        "code",
        "i",
        "mark",
    ], []);

    const getTagName = useCallback((value: string) => {
        const startTagName = value.trim().substring(1);
        const indexOfEndTagName = startTagName.match(/ (.*?)>/)?.index ?? 1;
    
        return startTagName.substring(0, Number(indexOfEndTagName) ?? 1);
    }, []);

    const getComponentByName = useCallback((name: string) => {
        switch (name) {
            case "b": return Strong;
            case "code": return Code;
            case "i": return Italic;
            case "mark": return Mark;
    
            default: return Text;
        }
    }, []);
    
    const createElementByTagName = 
        useCallback((tagChildren: string | ReactNode, tagName: string): ReactNode => {
            return createElement(
                getComponentByName(tagName),
                null,
                tagChildren
            )
        }, [getComponentByName]
    );

    const matchTagInList = 
        useCallback((listOfTags: Array<string>, text: string): RegExpMatchArray | null => {
            const { match } = listOfTags.reduce((acum, tag) => {
                const currentMatch = text.match(new RegExp(`<${tag}(.*?)>`));
        
                if (!currentMatch) return acum;
        
                if (acum.match == null) {  
                    acum.match = currentMatch;
                    return acum;
                };
        
                const currentMatchIsPreviousAcumMatch = 
                    currentMatch.index != null &&
                    acum.match.index != null &&
                    currentMatch.index < acum.match.index;
        
                if (currentMatchIsPreviousAcumMatch) {
                    acum.match = currentMatch;
                    return acum;
                }
        
                return acum;
            }, { match: null } as { match: RegExpMatchArray | null });
        
            return match;
        }, []
    );

    const parseHtmlTag = 
        useCallback((listOfTags: Array<string>, value: string): ReactNode => {
            const firstMatchTag = matchTagInList(listOfTags, value);
        
            if (firstMatchTag == null || firstMatchTag?.index == null) {
                return <Fragment>{decode(value)}</Fragment>
            };
            
            const stringAfterTargetTag = 
                value.substring(firstMatchTag.index + firstMatchTag[0].length);
            
            const tagName = getTagName(firstMatchTag[0]);
        
            const closeTag = stringAfterTargetTag.match(new RegExp(`<\/${tagName}>`));
        
            const nextOpenTag = matchTagInList(listOfTags, stringAfterTargetTag)
        
            if (
                closeTag?.index == null || 
                (closeTag.index == null && nextOpenTag?.index == null)
            ) {
                return (
                    <Fragment>{decode(value)}</Fragment>
                );
            }
        
            // If does not exists anyone open tag
            if (
                nextOpenTag?.index == null ||
                (closeTag.index < nextOpenTag.index)    
            ) {
                const textBeforeTag = value.substring(0, firstMatchTag.index);
                const tagText = stringAfterTargetTag.substring(0, closeTag.index);
                const textAfterTag = stringAfterTargetTag.substring(closeTag.index + closeTag[0].length);
        
                return (
                    <Fragment>
                        {textBeforeTag && decode(textBeforeTag)}
                        {createElementByTagName(decode(tagText), tagName)}
                        {textAfterTag && parseHtmlTag(listOfTags, textAfterTag)}
                    </Fragment>
                )
            }
        
            const textBeforeTag = value.substring(0, firstMatchTag.index);
            const tagText = value.substring(firstMatchTag.index + firstMatchTag[0].length)
            const textAfterTag = stringAfterTargetTag.substring(closeTag.index + closeTag[0].length);
            
            return (
                <Fragment>
                    {textBeforeTag && decode(textBeforeTag)}
                    {createElementByTagName(
                        parseHtmlTag(listOfTags, tagText.substring(0, closeTag.index)), 
                        tagName
                    )}
                    {textAfterTag && parseHtmlTag(listOfTags, textAfterTag)}
                </Fragment>
            )
        }, [matchTagInList, getTagName, createElementByTagName ]
    );

    return {
        defaultListTags,
        parseHtmlTag,
    }
}
