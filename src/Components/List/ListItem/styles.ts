import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingLeft: 12
  },
  listItem: {
    fontSize: 16,
    color: '#292929',
  },
  listStyleNumber: {
    fontSize: 16,
    color: '#292929',
    marginRight: 16,
  },
  listStyleDot: {
    height: 6,
    maxHeight: 6,
    width: 6,
    maxWidth: 6,
    marginRight: 12,
    borderRadius: 6,
    backgroundColor: '#292929',
  }
});

export default styles;
