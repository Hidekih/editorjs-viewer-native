import { memo } from "react";
import { Text } from "react-native";

import { styles } from "./styles";
import { CodeProps } from "./types";

const Code = ({ children }: CodeProps) => {
    return (
        <Text
            allowFontScaling={true}
            style={styles.code}
        >   
            {children}
        </Text>
    )
}

export default memo(Code);
