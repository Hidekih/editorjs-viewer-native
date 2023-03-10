import { TextProps } from 'react-native';

export type IHeaderProps = {
  data: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };
  fontFamily?: string;
} & TextProps;
