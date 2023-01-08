import { Text, View } from "react-native";

import RenderHtml from 'react-native-render-html';

import { styles } from "./styles";
import { ItemListProps } from "./types";

export const ItemList = ({ value, width, style, index }: ItemListProps) => {
    const source = {
        html: value,
    };

    return (
        <View style={styles.container}>
            {
                {
                    "ordered": <View style={styles.dot}/>,
                    "unordered": <Text style={{ ...styles.listItem, marginRight: 16 }}>{index + 1}</Text>
                }[style]
            }

            <Text
                accessible
                accessibilityRole="text"
                allowFontScaling={true}
            >   
                <RenderHtml
                    source={source}
                    contentWidth={width}
                    baseStyle={styles.listItem}
                />
            </Text>
        </View>
    )
}

export default ItemList;