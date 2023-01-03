import { Text } from "react-native";

import { styles } from "./styles"; 
import { ParagraphProps } from "./types";

export const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <Text
            accessible={true}
            accessibilityRole="text"
            allowFontScaling={true}
        >
            {children}
        </Text>
    )
}

export default Paragraph;
