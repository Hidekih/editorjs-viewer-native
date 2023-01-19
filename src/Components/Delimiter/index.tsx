import { View, Text } from 'react-native';
import { decode } from 'html-entities';

import { styles } from './styles';
import { IDelimiterProps } from './types';

/**
 * Reference https://github.com/editor-js/delimiter
*/
const Delimiter = ({ style, ...rest }: IDelimiterProps) => {
  return (
    <View
      aria-hidden
      style={[
        style,
        { ...styles.container }
      ]}
      {...rest}
    >
      <Text style={styles.delimiter}>{decode('&ast;')}</Text>
      <Text style={styles.delimiter}>{decode('&ast;')}</Text>
      <Text style={styles.delimiter}>{decode('&ast;')}</Text>
    </View>
  );
};

export { Delimiter };
