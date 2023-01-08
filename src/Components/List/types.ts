import { TextProps } from 'react-native';

export type ListData = {
  items: Array<string>;
  style: 'ordered' | 'unordered';
  [key: string]: any;
}

export type ListProps = {
  data: ListData;
} & TextProps;

export default ListProps;
