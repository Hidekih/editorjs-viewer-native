import { StyleSheet } from 'react-native';

import { MAX_IMAGE_HEIGHT } from '../../constants/sizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  defaultImage: {
    height: MAX_IMAGE_HEIGHT,
    width: '100%',
    resizeMode: 'contain',
  }
});

export default styles;
