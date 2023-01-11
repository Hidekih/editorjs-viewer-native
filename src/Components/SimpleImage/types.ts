import { TextProps } from 'react-native';

type SimpleImageData = {
  url: string;
  caption?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  stretched?: boolean;
}

export type SimpleImageProps = {
  data: SimpleImageData;
} & TextProps;
