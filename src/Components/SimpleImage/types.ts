import { TextProps } from 'react-native';

export type SimpleImageProps = {
  data: {
    url: string;
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
  captionFontFamily?: string;
} & TextProps;
