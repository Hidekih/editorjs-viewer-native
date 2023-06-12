import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type IFallbackBlockProps = {
  blockType: string;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;

