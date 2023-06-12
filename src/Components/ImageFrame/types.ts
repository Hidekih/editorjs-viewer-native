import { StyleProp, ViewProps, ViewStyle } from 'react-native';

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
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
