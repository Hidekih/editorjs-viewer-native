import { View, Text } from 'react-native';

import { IFallbackBlockProps } from './types';
import { styles } from './styles';

const FallbackBlock = ({ blockType, containerStyle, ...rest }: IFallbackBlockProps) => {
  return (
    <View
      accessibilityRole='alert'
      style={[ styles.container, containerStyle ]}
      {...rest}
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
