import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type IListProps = {
  data: {
    items: Array<string>;
    style: 'ordered' | 'unordered';
  };
  fontFamily?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
