import { TextProps } from 'react-native';

export type IParagraphProps = {
  data: {
    text: string;
  };
  fontFamily?: string;
} & TextProps;
