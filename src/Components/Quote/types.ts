import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type IQuoteProps = {
  data: {
    text: string,
    caption?: string,
    alignment?: 'left' | 'center'
  };
  quoteFontFamily?: string;
  captionFontFamily?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
