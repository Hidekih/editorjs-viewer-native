import { Text } from 'react-native';

import { IBoldProps } from './types';

const Bold = ({ fontFamily, children }: IBoldProps) => {
  return (
    <Text
      allowFontScaling={true}
      style={{
        fontWeight: '700',
        fontFamily,
      }}
    >
      {children}
    </Text>
  );
};

export { Bold };
