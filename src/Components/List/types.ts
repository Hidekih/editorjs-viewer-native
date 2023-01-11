import { TextProps } from 'react-native';

export type ListData = {
  items: Array<string>;
  style: 'ordered' | 'unordered';
}

export type ListProps = {
  data: ListData;
} & TextProps;
