import React, { Component } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
import IMAGES from '../global/Image';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 326 * 151;
const height_list2 = deviceWidth / 329 * 247;
import Model from '../global/Model';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: []
    }
  }

  Doclick_viewDetail(index) {
    console.log('Doclick_viewDetail:', index);
    this.props.navigation.push('Second');
  }

  actionOnRow(item, index) {
    console.log('Selected Item :',item.image);
    if (item.type == 1) {
      //TODO
      return;
    }
    // this.props.navigation.navigate('Second', {model: item.data,});
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
                <View key={index} style={styles.view_list}>
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