import { TouchableOpacityProps } from 'react-native';

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
} & TouchableOpacityProps;

