import React, {useEffect, Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';

import Comments from './comments';

import { Card, Button, Icon } from 'react-native-elements';

class ModalScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
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
      <ScrollView style={styles.container}>
        
        <Text style={styles.mTitle}>{title}</Text> 

        <Text style={styles.mText}>{body}</Text>    

        <Text style={styles.mTitle}>Comments</Text> 
        <Comments postId={id}/>
        
        <View style={{alignItems:'center'}}>
        <Button
          icon={<Icon
            name='close'
            type='evilicon'
            color='#fff'
          />}
          onPress={() => this.closeModal()}
          buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginTop: 20,marginBottom: 20, width:200}}
          title='CLOSE DIALOG'
        />
        </View>
          
      </ScrollView>
    );
  }
}

export default ModalScreen;
