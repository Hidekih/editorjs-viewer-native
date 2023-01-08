import { View, Text } from "react-native";

import Paragraph from "./components/Paragraph";
import Header from "./components/Header";
import List from "./components/List";

import { EditorJsViwerNativeProps } from "./types";

export const EditorJsViwerNative = ({ data, ...rest }: EditorJsViwerNativeProps) => {
    return (
        <View {...rest}>
            {data.blocks.map((block) => {
                switch (block.type) {
                    case "paragraph": return (
                        <Paragraph key={block.id} data={block.data} />
                    );

                    case "header": return (
                        <Header key={block.id} data={block.data} />
                    );

                    case "list": return (
                        <List key={block.id} data={block.data}/>
                    )

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