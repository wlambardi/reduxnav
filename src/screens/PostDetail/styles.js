// ModalScreen/styles.js
import {StyleSheet} from 'react-native';
import { w, h, totalSize} from '../../util/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:w(100),
    backgroundColor: 'white',
    alignContent:'center',
  },
  mTitle: {
    fontSize: totalSize(2.2),
    padding:w(3),
    paddingTop:w(8),
    paddingBottom:w(2),
    fontWeight:'bold',
    color:'#2D2D2D',
  },
  mText: {
    fontSize: totalSize(1.8),
    padding:w(3),
    paddingBottom:w(5),
    color:'#2D2D2D',
  },
  mTitleComments: {
    fontSize: 20,
    padding:w(3),
    paddingTop:w(5),
    paddingBottom:w(3),
    fontWeight:'bold',
    color:'#2D2D2D',
  },
  divider:{
    backgroundColor: '#c6c6c7',
    margin:w(3),
  }
});

export default styles;
