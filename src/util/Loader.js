import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { w, h } from './Dimensions';
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
          width: props.size=='small' ? w(50) : w(40),
          height: props.size=='small' ? w(50) : h(40),
          backgroundColor: 'transparent',
        }}
        source={ props.tipo=='comments' ? require('../../assets/lotties/14718-dot-loader.json') : require('../../assets/lotties/loading.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white',
  },
});

export default Loader;
