import React, { useEffect } from 'react';
import { View, Image, Text, ScrollView, ListItem } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveComments } from '../../store/actions/comments';
import Lightbox from 'react-native-lightbox';
import { FlatGrid } from 'react-native-super-grid';
import { w, h, totalSize } from '../../util/Dimensions';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';
import AsyncImage from '../../util/AsyncImage';
import styles from './styles';

const Comments = props => {
    const dataSource = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props',JSON.stringify(props));
        console.log('item',JSON.stringify(props.item));
        console.log('title',JSON.stringify(props.title));
        const itemId = JSON.stringify(props.item);
        dispatch(retrieveComments(1));
    }, [dispatch]);


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    if (dataSource.error) {
        return <LottieError />;
    } else {
        if (dataSource.loadingComments) {
          return <Loader />;
        } else {
            return (
                <ScrollView>
                {dataSource.comments.map((l, i) => (
                    <ListItem
                    key={i}
                    title={l.email}
                    subtitle={l.body}
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
        }
    }
};
export default Comments
