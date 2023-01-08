import { memo } from "react";
import { Text, useWindowDimensions } from "react-native";

import RenderHtml from 'react-native-render-html';

import { ParagraphProps } from "./types";
import { styles } from "./styles"; 

const Paragraph = ({ data }: ParagraphProps) => {
    const { width } = useWindowDimensions();

    const source = {
        html: data.text,
    };

    return (
        <Text
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
        >   
            <RenderHtml
                source={source}
                contentWidth={width}
                baseStyle={styles.paragraph}
            />
        </Text>
    )
}

export default memo(Paragraph);
