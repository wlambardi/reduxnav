import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {pushScreen, openModal, AlbumScreen, PostsScreen} from 'Navigation';

const slides = [
  {
    key: '1',
    title: 'Posts',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/images/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Albums',
    text: 'Other cool stuff',
    image: require('../../../assets/images/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/images/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];


const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const Home = props => {
  this.state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity
          onPress={() => PostsScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    alert('Done!');
  }

  

  if (this.state.showRealApp) {
    return <App />;
  } else {
    return (
        <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>
    );
    
  }
};

export default Home;