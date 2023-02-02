import { StyleSheet } from 'react-native';

import { IMAGEHEIGHT } from '../../constants/sizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    alignItems: 'center'
  },
  image: {
    height: IMAGEHEIGHT,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: '#f2f2f2',
  },
  caption: {
    width: '100%',
    marginTop: 4,
    fontSize: 12,
    color: '#292929',
    textAlign: 'center'
  }
});

export default styles;
