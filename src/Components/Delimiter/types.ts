import { ViewProps } from 'react-native';

/**
 * Reference https://github.com/editor-js/delimiter
*/
export type IDelimiterProps = {
  // Eslint recommendation for empty object
  data: Record<string, never>;
} & ViewProps;
