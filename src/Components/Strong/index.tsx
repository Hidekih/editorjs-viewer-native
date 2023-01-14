import { Text } from 'react-native';

import { IStrongProps } from './types';

const Strong = ({ fontFamily, children }: IStrongProps) => {
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

export { Strong };
