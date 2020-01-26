// ModalScreen/styles.js
import {StyleSheet} from 'react-native';
import { w, h } from '../../util/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:w(100),
    backgroundColor: 'white',
    alignContent:'center',
  },
  mTitle: {
    fontSize: 20,
    padding:w(5),
    paddingBottom:w(0),
    fontWeight:'bold',
    color:'#2D2D2D',
  },
  mText: {
    fontSize: 18,
    padding:w(5),
    color:'#2D2D2D',
  },
  cardContainer:{
    borderWidth:0,
    width:w(90),
    margin: w(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  }
});

export default styles;
