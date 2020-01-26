// ModalScreen/styles.js
import {StyleSheet} from 'react-native';
import { w, h } from '../../util/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mText: {
    fontSize: 18,
    paddingBottom:15,
    color:'#999999',
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
