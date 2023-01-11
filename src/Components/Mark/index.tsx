import { Text } from 'react-native';

import { styles } from './styles';
import { MarkProps } from './types';

const Mark = ({ children }: MarkProps) => {
  return (
    <Text
      allowFontScaling={true}
      style={styles.mark}
    >
      {children}
    </Text>
  );
};

export { Mark };
