import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveAlbums } from '../../store/actions/albums';
import { ListItem } from 'react-native-elements';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';

import {PhotosScreen} from 'Navigation';

import styles from './styles';

const goBack = ({componentId}) => Navigation.pop(componentId);
const Albums = props => {

  const dataSource = useSelector(state => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAlbums());
  }, [dispatch]);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  showPhotos = (id, title) => {
    console.log(id);
    console.log(title);
    PhotosScreen(props,id, title);
  }


  if (dataSource.error) {
    return <LottieError />;
  } else {
    if (dataSource.loadingAlbums) {
      return <Loader />;
    } else {
      if (dataSource.albums !== null ) {
      return (
        <ScrollView>
          {dataSource.albums.map((l, i) => (
            <ListItem
              onPress={() => this.showPhotos(l.id, l.title)}
              //onPress={() => PhotosScreen(props)}
              titleStyle={styles.albumTitle}
              key={i}
              title={l.title}
              leftIcon={{
                name: 'ios-folder',
                type: 'ionicon',
                color: getRandomColor(),
                size: 35,
              }}
              bottomDivider
              rightIcon={{
                name: 'ios-arrow-forward',
                type: 'ionicon',
                color: '#e3e3e3',
                size: 25,
              }}
            />
          ))}
        </ScrollView>
      );
      }else{
        return <LottieError />;
      }
    }
  }
};

export default Albums;