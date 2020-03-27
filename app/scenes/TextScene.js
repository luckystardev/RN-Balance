import React, { Component } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, Text
} from 'react-native';
import IMAGES from '../global/Image';
// import TEXTS from '../global/Texts';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 326 * 151;
import Model from '../global/Model';
// import t04 from "../../assets/text/Prvni_pomoc.rtf"

class TextScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%', height: '100%',
  },
  view_list: {
    height: height_list, width: '100%',
    flexDirection: 'row',
  },
  image: {
    height: '100%', width: '100%'
  }
});

export default TextScene;