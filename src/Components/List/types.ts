import { ViewProps } from 'react-native';

export type IListProps = {
  data: {
    items: Array<string>;
    style: 'ordered' | 'unordered';
  };
  fontFamily?: string
} & Pick<ViewProps, 'style'>;
