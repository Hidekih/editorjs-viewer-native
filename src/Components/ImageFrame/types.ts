import { TextProps } from 'react-native';

type ImageFrameData = {
  file: {
    url : string
  },
  caption?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  stretched?: boolean;
}

export type ImageFrameProps = {
  data: ImageFrameData;
} & TextProps;

export default ImageFrameProps;
