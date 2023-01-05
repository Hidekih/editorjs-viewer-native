import { View, Text } from "react-native";

import Paragraph from "./components/Paragraph";
import Header from "./components/Header";

import { EditorJsViwerNativeProps } from "./types";
import { styles } from "./styles"; 

export const EditorJsViwerNative = ({ data }: EditorJsViwerNativeProps) => {
    return (
        <View>
            {data.blocks.map((block) => {
                switch (block.type) {
                    case "paragraph": return (
                        <Paragraph data={block.data}>
                            {block.data}
                        </Paragraph>
                    );

                    case "header": return (
                        <Header data={block.data}>
                            {block.data}
                        </Header>
                    );

                    default: return (
                        <Text>
                            O tipo "{block.type}" ainda não é suportado pelo EditorJsViwerNative
                        </Text>
                    );
                }
            })}
        </View>
    )
}