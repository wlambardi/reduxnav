import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {pushScreen, openModal, AlbumScreen, PostsScreen} from 'Navigation';
import styles from './styles';


const Home = props => {
  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" />
      <View style={styles.buttonsSection}>

        <TouchableOpacity
          onPress={() => PostsScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Posts Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => AlbumScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Albums Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Push Screen</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={openModal} 
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
