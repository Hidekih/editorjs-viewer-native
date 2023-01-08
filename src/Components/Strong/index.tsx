import { memo } from 'react';
import { Text } from 'react-native';

import { StrongProps } from './types';

const Strong = ({ fontFamily, children }: StrongProps) => {
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

export default memo(Strong);
