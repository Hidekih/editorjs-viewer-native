import { Text } from 'react-native';

import { styles } from './styles';
import { IItalicProps } from './types';

const Italic = ({ children, fontFamily }: IItalicProps) => {
  return (
    <Text
      allowFontScaling={true}
      style={{
        ...styles.italic,
        fontFamily
      }}
    >
      {children}
    </Text>
  );
};

export { Italic };
