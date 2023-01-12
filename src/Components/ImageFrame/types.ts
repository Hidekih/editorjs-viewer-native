import { TextProps } from 'react-native';

export type ImageFrameProps = {
  data: {
    file: {
      url : string
    },
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
} & TextProps;
