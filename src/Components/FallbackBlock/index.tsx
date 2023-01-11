import { View, Text } from 'react-native';

import { FallbackBlockProps } from './types';
import { styles } from './styles';

const FallbackBlock = ({ blockType }: FallbackBlockProps) => {
  return (
    <View
      accessibilityRole='alert'
      style={styles.container}
    >
      <Text
        accessible
        style={styles.alertText}
      >
        Type &quot;{blockType}&quot; is yet not supported :c
      </Text>
    </View>
  );
};

export { FallbackBlock };
