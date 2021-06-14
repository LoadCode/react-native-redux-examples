import {StyleSheet} from 'react-native';

const ICON_SIZE = 20;

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 50,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    marginRight: 8,
    tintColor: 'white',
  },
});
