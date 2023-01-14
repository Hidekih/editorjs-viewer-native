import { TextProps } from 'react-native';

export type QuoteProps = {
  data: {
    text: string,
    caption?: string,
    alignment?: 'left' | 'center'
  };
  quoteFontFamily?: string;
  captionFontFamily?: string;
} & TextProps;
