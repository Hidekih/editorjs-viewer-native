import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export type ILinkToolProps = {
  data: {
    link: string;
    meta: {
        title?: string;
        site_name?: string;
        description?: string;
        image?: {
          url?: string;
        }
    }
  };
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<TouchableOpacityProps, 'style'>;

