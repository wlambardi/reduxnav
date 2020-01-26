import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrievePhotos } from '../../store/actions/photos';
import Lightbox from 'react-native-lightbox';
import { FlatGrid } from 'react-native-super-grid';
import { w, h, totalSize } from '../../util/Dimensions';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';
import AsyncImage from '../../util/AsyncImage';
import styles from './style';

const Photos = props => {
    const dataSource = useSelector(state => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props',JSON.stringify(props));
        console.log('item',JSON.stringify(props.item));
        console.log('title',JSON.stringify(props.title));
        const itemId = JSON.stringify(props.item);
        dispatch(retrievePhotos(itemId));
    }, [dispatch]);


    if (dataSource.error) {
        return <LottieError />;
    } else {
        if (dataSource.loadingPhotos) {
          return <Loader />;
        } else {
            return (
            <View style={styles.mainContainer}>
                <FlatGrid
                itemDimension={w(20)}
                items={dataSource.photos}
                style={styles.gridView}
                spacing={w(1)}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                    <Lightbox
                        underlayColor="white"
                        renderContent={() => (
                        <View style={{ flex: 1 }}>
                            <Image
                            source={{ uri: item.url }}
                            style={styles.contain}
                            resizeMode="contain"
                            />
                            <View
                            style={{
                                position: 'absolute',
                                alignItems: 'center',
                                left: 0,
                                right: 0,
                                bottom: h(5),
                            }}>
                            <Text style={styles.titleBox}>{item.title}</Text>
                            </View>
                        </View>
                        )}>
                        <AsyncImage
                        style={styles.avatar}
                        resizeMode="contain"
                        source={{
                            uri: item.thumbnailUrl,
                        }}
                        />
                    </Lightbox>
                    </View>
                )}
                />
            </View>
            );
        }
    }
};
export default Photos
