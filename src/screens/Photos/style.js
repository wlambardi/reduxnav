import { StyleSheet } from 'react-native';
import { w, h } from '../../util/Dimensions';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    width: w(100),
    height: h(100),
  },
  contain: {
    flex: 1,
  },
  avatar: {
    width: w(24),
    height: w(24),
  },
  titleBox: {
    color: '#fff',
    fontSize: 18,
    padding: w(5),
    textAlign:'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: w(0),
    backgroundColor: '#FFF',
  },
});
