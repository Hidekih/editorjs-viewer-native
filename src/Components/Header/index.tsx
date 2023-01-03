import { Text } from "react-native";

import { HeaderProps } from "./types";

export const Header = ({ level, children }: HeaderProps) => {
    const stylesByHeadingLevel = useMemo((styles[level]) => (), []);

    return (
        <Text styles={stylesByHeadingLevel}>{children}</Text>
    )
}

export default Header;
