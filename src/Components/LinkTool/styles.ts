import { StyleSheet } from 'react-native';

const IMAGEHEIGHT = 98;

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: 6,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 2,
    borderColor: '#DFDFDE',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  dataContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  description: {
    color: '#7D7C78',
    marginTop: 2,
    fontSize: 14
  },
  link: {
    marginTop: 6,
    fontSize: 14
  },
  imageContainer: {
    width: IMAGEHEIGHT,
    height: IMAGEHEIGHT,
    marginLeft: 12,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: IMAGEHEIGHT,
    resizeMode: 'cover',
  },
});

export default styles;
