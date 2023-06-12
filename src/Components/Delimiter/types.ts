import { StyleProp, ViewProps, ViewStyle } from 'react-native';

/** Reference https://github.com/editor-js/delimiter */
export type IDelimiterProps = {
  data: Record<string, never>;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
