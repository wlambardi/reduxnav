import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrievePosts} from '../../store/actions/posts';
import { ListItem, Icon } from 'react-native-elements';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';

import {openPostDetail} from 'Navigation';

import styles from './styles';

const goBack = ({componentId}) => Navigation.pop(componentId);
const Posts = props => {

  const dataSource = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePosts());
  }, [dispatch]);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  showPost = (post) => {
    console.log(post.id);
    console.log(post.title);
    console.log(post.body);
    openPostDetail(props,post);
  }


  if (dataSource.error) {
    return <LottieError />;
  } else {
    if (dataSource.loadingPosts) {
      return <Loader />;
    } else {
      if (dataSource.posts !== null ) {
      return (
        <ScrollView>
          {dataSource.posts.map((l, i) => (
            <ListItem
              onPress={() => this.showPost(l)}
              key={i}
              title={l.title}
              titleStyle={styles.postTitle}
              bottomDivider
              leftIcon={{
                name: 'ios-document',
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

export default Posts;