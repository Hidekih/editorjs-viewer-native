import { Text } from 'react-native';
import { useMemo } from 'react';

import { styles } from './styles';
import { HeaderProps } from './types';

const Header = ({ data, fontFamily, ...rest }: HeaderProps) => {
  const stylesByHeadingLevel = useMemo(() => styles[`h${data.level}`], []);

  return (
    <Text
      {...rest}
      accessible={true}
      accessibilityRole="header"
      allowFontScaling={true}
      style={{ ...styles.global, ...stylesByHeadingLevel, fontFamily }}
    >
      {data.text}
    </Text>
  );
};

export { Header };
