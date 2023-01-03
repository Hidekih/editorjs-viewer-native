import { Text } from "react-native";
import { useMemo, memo } from "React";

import { useParseHtmlTags } from "../../hooks/useParseHtmlTags";
import { styles } from "./styles";
import { HeaderDataProps } from "./types";

export const Header = ({ level, data }: HeaderProps) => {
    const stylesByHeadingLevel = useMemo((styles[level]) => (), []);

    const { parseHtmlTags } = useParseHtmlTags();
    const textParsed = parseHtmlTags(data.text);

    return (
        <Text 
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            styles={stylesByHeadingLevel}
        >
            {textParsed}
        </Text>
    )
}

export default memo(Header);
