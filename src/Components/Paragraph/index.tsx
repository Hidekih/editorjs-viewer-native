import { memo } from "react";
import { Text } from "react-native";

import { useParseHtmlTags } from "../../hooks/useParseHtmlTags";
import { ParagraphProps } from "./types";
import { styles } from "./styles"; 

const Paragraph = ({ data, ...rest }: ParagraphProps) => {
    const { parseHtmlTags } = useParseHtmlTags();
    
    const textParsed = parseHtmlTags(data.text);

    return (
        <Text
            {...rest}
            accessible={true}
            accessibilityRole="text"
            allowFontScaling={true}
            style={styles.paragraph}
        >
            {textParsed}
        </Text>
    )
}

export default memo(Paragraph);
