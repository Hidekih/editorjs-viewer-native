import { TextProps } from 'react-native';

export type ListProps = {
  data: {
    items: Array<string>;
    style: 'ordered' | 'unordered';
  };
  fontFamily?: string
} & TextProps;
