import {StyleSheet} from 'react-native';
import {primary} from '@constants/colors';

export default StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  display: {
    textAlign: 'center',
    fontSize: 30,
    color: primary,
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  icon: {
    transform: [{rotate: '180deg'}],
  },
});
