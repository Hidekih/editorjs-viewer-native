import { Text, TextProps } from "react-native";

export const Header = ({ children }: TextProps) => {
    return (
        <Text>{children}</Text>
    )
}

export default Header;
