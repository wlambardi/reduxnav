import React, {useEffect, Component} from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveComments} from '../../store/actions/comments';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';
import styles from './styles';
import { Card, Button, Icon } from 'react-native-elements';

class ModalScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount(){
    
  }

  Start() {
    const dataSource = useSelector(state => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props',JSON.stringify(props));
        console.log('item',JSON.stringify(props.id));
        console.log('title',JSON.stringify(props.title));
        const id = JSON.stringify(props.id);
        dispatch(retrieveComments(id));
    }, [dispatch]);
  }


  navigationButtonPressed({buttonId}) {
    if (buttonId === 'leftButton') {
      Navigation.dismissModal(this.props.componentId);
    }
  }

  closeModal(){
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    const {id, title, body} = this.props;
    return (
      <View style={styles.container}>
        <Card
          containerStyle={styles.cardContainer}
          title={title}>
          <Text style={styles.mText}>
          {body}
          </Text>
          <Button
            icon={<Icon
              name='close'
              type='evilicon'
              color='#fff'
            />}
            onPress={() => this.closeModal()}
            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CLOSE DIALOG' />
        </Card>
      </View>
    );
  }
}

export default ModalScreen;
