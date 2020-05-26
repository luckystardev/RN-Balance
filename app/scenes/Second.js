import React, { Component } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
import IMAGES from '../global/Image';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 326 * 151;
const height_list2 = deviceWidth / 329 * 247;
import Model from '../global/Model';
import NType from '../global/NType';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: []
    }
  }

  actionOnRow(item, index) {
    console.log('Selected Item :',item.image);
    if (item.type == NType.text) {
      //TODO
      this.props.navigation.navigate('TextScene');
      return;
    }
    this.props.navigation.navigate('VideoScene');
  }

  render() {
    const { navigation } = this.props;

    return (
        <ImageBackground source={IMAGES.bg} style={styles.container}>
          <FlatList
            data= {navigation.getParam('model')}
            keyExtractor={(item, index) => index.toString() }
            extraData= {this.state}
            renderItem={ ({item, index}) =>
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item, index)}>
                <View key={index} style= { (navigation.getParam('index') == 2 && index != 3) ? styles.view_list2 : styles.view_list}>
                  <Image source={item.image} style={styles.image}/>
                </View>
            </TouchableWithoutFeedback>
            }
            numColumns={1}
          />
        </ImageBackground>
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
  view_list2: {
    height: height_list2, width: '100%',
    flexDirection: 'row',
  },
  image: {
    height: '100%', width: '100%'
  }
});

export default Second;