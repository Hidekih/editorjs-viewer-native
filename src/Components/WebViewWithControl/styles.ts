import { Platform, StyleSheet, StatusBar, Dimensions } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Dimensions.get('window').height ?? 700,
    paddingTop: isAndroid ? StatusBar.currentHeight ?? 0 : 0,
    zIndex: 999,
    backgroundColor: 'gray',
  },
  control: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    height: 56,
  },
  controlClose: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f9f9f9',
  },
  uriPreview: {
    fontSize: 16,
    color: '#f9f9f9',
    marginLeft: 16,
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
