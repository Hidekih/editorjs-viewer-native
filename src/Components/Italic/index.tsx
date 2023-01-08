import { memo } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import { ItalicProps } from './types';

const Italic = ({ children, fontFamily }: ItalicProps) => {
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

export default memo(Italic);
