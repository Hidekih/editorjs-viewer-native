import { Text } from 'react-native';

import { styles } from './styles';
import { ICodeProps } from './types';

const Code = ({ children }: ICodeProps) => {
  return (
    <Text
      allowFontScaling={true}
      style={styles.code}
    >
      {children}
    </Text>
  );
};

export { Code };
