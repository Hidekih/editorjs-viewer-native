import { TouchableOpacityProps } from 'react-native';

export type LinkToolProps = {
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
} & TouchableOpacityProps;

