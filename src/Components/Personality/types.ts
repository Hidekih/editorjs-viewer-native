import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export type IPersonalityProps = {
  data: {
    name?: string;
    description?: string;
    link: string;
    photo?: string;
  };
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<TouchableOpacityProps, 'style'>;

