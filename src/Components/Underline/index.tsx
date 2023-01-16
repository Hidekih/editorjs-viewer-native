import { Text } from 'react-native';

import { IUnderlineProps } from './types';

const Underline = ({ fontFamily, children }: IUnderlineProps) => {
  return (
    <Text
      allowFontScaling={true}
      style={{
        textDecorationLine: 'underline',
        fontFamily,
      }}
    >
      {children}
    </Text>
  );
};

export { Underline };
