import { StyleProp, TextProps, ViewStyle } from 'react-native';

export type ISimpleImageProps = {
  data: {
    url: string;
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
  captionFontFamily?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<TextProps, 'style'>;
