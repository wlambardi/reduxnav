import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { w } from './Dimensions';
import LottieView from 'lottie-react-native';

const Loader = props => {

  useEffect(() => {
    const tipo = JSON.stringify(props.tipo);
    const size = JSON.stringify(props.size);
  });

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: props.size=='small' ? w(20) : w(60),
          height: props.size=='small' ? w(20) : w(60),
          backgroundColor: 'transparent',
        }}
        source={ props.tipo=='comments' ? require('../../assets/lotties/loadingComments.json') : require('../../assets/lotties/loading.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Loader;
