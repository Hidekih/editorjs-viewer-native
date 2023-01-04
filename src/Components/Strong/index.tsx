import { memo } from "react";
import { Text } from "react-native";

import { StrongProps } from "./types";

export const Strong = ({ fontFamily, children }: StrongProps) => {
    return (
        <Text
            allowFontScaling={true}
            styles={{
                fontWeight: 700,
                fontFamily: fontFamily,
            }}
        >
            {children}
        </Text>
    )
}

export default memo(Strong);
