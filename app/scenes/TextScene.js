import React, { Component } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, Text, ScrollView,
} from 'react-native';
import IMAGES from '../global/Image';
// import TEXTS from '../global/Texts';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 326 * 151;
import Model from '../global/Model';
// import HTML from 'react-native-render-html';
import t52 from "../../assets/html/eft_text.html"

const htmlContent = `
    <h3>This HTML snippet is now rendered with native components !</h3>
    <h4>Enjoy a webview-free and blazing fast application</h4>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

class TextScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        {/* <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} /> */}
        <Image source={IMAGES.vice} style={styles.view_list}/>
      </ScrollView>
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
    height: 200, width: Dimensions.get('window').width
  },
});

export default TextScene;