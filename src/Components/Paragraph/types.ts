import { TextProps } from 'react-native';

export type ParagraphProps = {
  data: {
    text: string;
  };
  fontFamily?: string;
} & TextProps;
