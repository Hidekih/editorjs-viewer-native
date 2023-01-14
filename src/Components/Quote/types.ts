import { TextProps } from 'react-native';

export type IQuoteProps = {
  data: {
    text: string,
    caption?: string,
    alignment?: 'left' | 'center'
  };
  quoteFontFamily?: string;
  captionFontFamily?: string;
} & TextProps;
