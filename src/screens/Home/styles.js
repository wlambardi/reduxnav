import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsSection: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'skyblue',
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
