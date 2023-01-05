import { TextProps } from "react-native";

type HeaderData = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
}

export type HeaderProps = {
    data: HeaderData;
} & TextProps;

export default HeaderProps;
