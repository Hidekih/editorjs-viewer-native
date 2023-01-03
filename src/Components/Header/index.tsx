import { Text } from "react-native";

import { HeaderProps } from "./types";

export const Header = ({ level, children }: HeaderProps) => {
    const stylesByHeadingLevel = useMemo((styles[level]) => (), []);

    return (
        <Text 
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            styles={stylesByHeadingLevel}
        >
            {children}
        </Text>
    )
}

export default Header;
