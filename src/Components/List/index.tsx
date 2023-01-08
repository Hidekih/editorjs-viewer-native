import { memo, useMemo } from "react";
import { SectionList, useWindowDimensions } from "react-native";

import { ListProps } from "./types";
import { styles } from "./styles"; 
import { ItemList } from "./ItemList";

const List = ({ data }: ListProps) => {
    const { width } = useWindowDimensions();

    const sections = useMemo(() => {
        return [{ data: data.items }]
    }, []);

    return (
        <SectionList
            style={styles.list}
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
                <ItemList 
                    value={item}
                    width={width} 
                    index={index} 
                    style={data.style} 
                />
            ) }
        />
    )
}

export default memo(List);
