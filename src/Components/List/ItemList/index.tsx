import { useMemo } from "react";
import { Text, View } from "react-native";

import { useParseHtmlTags } from "../../../hooks/useParseHtmlTags";
import { styles } from "./styles";
import { ItemListProps } from "./types";

export const ItemList = ({ value, listStyle, index }: ItemListProps) => {
    const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

    const parsedText = useMemo(() => parseHtmlTag(defaultListTags, value), []);

    return (
        <View style={styles.container}>
            {
                {
                    "ordered": <View style={styles.dot}/>,
                    "unordered": <Text style={{ ...styles.listItem, marginRight: 16 }}>{index + 1}</Text>
                }[listStyle]
            }

            <Text
                accessible
                accessibilityRole="text"
                allowFontScaling={true}
                style={styles.listItem}
            >     
                {parsedText}
            </Text>
        </View>
    )
}

export default ItemList;