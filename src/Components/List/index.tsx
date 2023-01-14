import { useMemo } from 'react';
import { SectionList } from 'react-native';

import { IListProps } from './types';
import { styles } from './styles';
import { ItemList } from './ItemList';

const List = ({ data, fontFamily, style }: IListProps) => {
  const sections = useMemo(() => {
    return [{ data: data.items }];
  }, []);

  return (
    <SectionList
      style={[ style, styles.list ]}
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <ItemList
          value={item}
          index={index}
          listStyle={data.style}
          fontFamily={fontFamily}
        />
      ) }
    />
  );
};

export { List };
