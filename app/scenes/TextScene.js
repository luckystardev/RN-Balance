import React, { Component, useState, useEffect } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, Text, ScrollView,
} from 'react-native';

import RtfFileReader from 'react-native-rtf-file-reader';

import IMAGES from '../global/Image';
// import TEXTS from '../global/Texts';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 326 * 151;
// import Model from '../global/Model';

class TextScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rtfContent:'',
    }
  }

  UNSAFE_componentWillMount() {
    this.getRtfFileContent("/rtfFiles/clientFile.rtf", true);
  }

  getRtfFileContent = (filePath, isFromAsset) => {
    if(Platform.OS == "android"){
      RtfFileReader.convertRtfFileString(filePath, isFromAsset, (rtfRes) => {
        console.log("rtf Response :- ", rtfRes);
        this.setState({rtfContent:rtfRes});
      })
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={{color: 'green'}}>{this.state.rtfContent}</Text>
        {/* <Image source={IMAGES.vice} style={styles.view_list}/> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    width: '100%', height: '100%',
  },
  view_list: {
    height: height_list, width: '100%',
    flexDirection: 'row',
  },
  image: {
    height: 200, width: Dimensions.get('window').width
  },
});

export default TextScene;