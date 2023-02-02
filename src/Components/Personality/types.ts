import { TouchableOpacityProps } from 'react-native';

export type IPersonalityProps = {
  data: {
    name?: string;
    description?: string;
    link: string;
    photo?: string;
  };
} & TouchableOpacityProps;

