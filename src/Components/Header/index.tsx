import { Text } from "react-native";
import { useMemo, memo } from "React";

import { styles } from "./styles";
import { HeaderProps } from "./types";

export const Header = ({ data }: HeaderProps) => {
    const stylesByHeadingLevel = useMemo(() => styles[`h${data.level}`], []);

    return (
        <Text 
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            style={stylesByHeadingLevel}
        >
            {data.text}
        </Text>
    )
}

export default memo(Header);
