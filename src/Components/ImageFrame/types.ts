import { TextProps } from 'react-native';

export type IImageFrameProps = {
  data: {
    file: {
      url : string
    },
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
  captionFontFamily?: string;
} & TextProps;
