import { TouchableOpacityProps } from 'react-native';

type LinkData = {
  link: string;
  meta: {
      title?: string;
      site_name?: string;
      description?: string;
      image?: {
        url?: string;
      }
  }
}

export type BookmarkProps = {
  data: LinkData;
} & TouchableOpacityProps;

