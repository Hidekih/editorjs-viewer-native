import { View, Text } from "react-native";

import { styles } from "./styles"; 
import { EditorJsViwerNativeProps } from "./types";
import { Paragraph } from "./Components/Paragraph/index";

export const EditorJsViwerNative = ({ data }: EditorJsViwerNativeProps) => {
    return (
        <View>
            { data.blocks.map((block) => {
                switch (block.type) {
                    case "paragraph": return (
                        <Paragraph>
                            {block.data}
                        </Paragraph>
                    );

                    default: return (
                        <Text>
                            O tipo "{block.type}" ainda não é suportado pelo EditorJsViwerNative
                        </Text>
                    );
                }
            }) }
        </View>
    )
}