import { Text } from 'react-native';

import { styles } from './styles';
import { IMarkProps } from './types';

const Mark = ({ children }: IMarkProps) => {
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
