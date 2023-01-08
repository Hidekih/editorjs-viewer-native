import { memo, useMemo } from 'react';
import { SectionList } from 'react-native';

import { ListProps } from './types';
import { styles } from './styles';
import { ItemList } from './ItemList';

const List = ({ data }: ListProps) => {
  const sections = useMemo(() => {
    return [{ data: data.items }];
  }, []);

  return (
    <SectionList
      style={styles.list}
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <ItemList
          value={item}
          index={index}
          listStyle={data.style}
        />
      ) }
    />
  );
};

export default memo(List);
