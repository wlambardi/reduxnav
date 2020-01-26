import React, { useEffect } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveComments } from '../../store/actions/comments';
import Loader from '../../util/Loader';
import { ListItem, Divider } from 'react-native-elements';
import LottieError from '../../util/LottieError';
import styles from './styles';
import { w, h, totalSize } from '../../util/Dimensions';

const comments = props => {

    const dataSource = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props',JSON.stringify(props));
        //console.log('item',JSON.stringify(props.item));
        //console.log('title',JSON.stringify(props.title));
        const postId = JSON.stringify(props.postId);
        dispatch(retrieveComments(postId));
    }, [dispatch]);


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function length(obj) {
      return Object.keys(obj).length;
    }

    if (dataSource.error) {
        return <LottieError />;
      } else {
        if (dataSource.loadingComments) {
          return <Loader tipo='comments' size='small'/>;
        } else {
          if (dataSource.comments !== null ) {
          return (
            <View>
              <Divider style={styles.divider} />
              <Text style={styles.mTitleComments}> Comments ({length(dataSource.comments)})</Text>
              {
                dataSource.comments.map((l, i) => (
                <ListItem
                  //onPress={() => this.showPhotos(l.id, l.title)}
                  //onPress={() => PhotosScreen(props)}
                  //titleStyle={styles.albumTitle}
                  key={i}
                  title={l.name}
                  titleStyle={{color:'black', fontWeight:'bold'}}
                  subtitle={`${l.email}\n\n${l.body}`}
                  /*leftIcon={{
                    name: 'comment',
                    type: 'fontawesome',
                    color: getRandomColor(),
                    size: 35,
                  }}*/
                  //bottomDivider
                  //topDivider
                />
              ))}
            </View>
          );
          }else{
            return <LottieError />;
          }
        }
    }
};

export default comments;
