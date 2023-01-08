import { TextProps } from 'react-native';

type ParagraphData = {
  text: string;
  [key: string]: any;
}

export type ParagraphProps = {
  data: ParagraphData;
} & TextProps;

export default ParagraphProps;
