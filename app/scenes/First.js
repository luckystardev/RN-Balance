import React, { Component } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
import IMAGES from '../global/Image';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 329 * 247;

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: [
        { image: IMAGES.m0, type: 0 },
        { image: IMAGES.m1, type: 0 },
        { image: IMAGES.m2, type: 0 },
        { image: IMAGES.m3, type: 0 },
        { image: IMAGES.m4, type: 0 },
        { image: IMAGES.m5, type: 0 },
        { image: IMAGES.m6, type: 1 },
        { image: IMAGES.m7, type: 0 },
        { image: IMAGES.m8, type: 0 },
        { image: IMAGES.m9, type: 0 },
        { image: IMAGES.m10, type: 0 },
        { image: IMAGES.m11, type: 0 },
        { image: IMAGES.m12, type: 0 }  
      ]
    }
  }

  Doclick_viewDetail(index) {
    console.log('Doclick_viewDetail:', index);
    this.props.navigation.push('Second');
  }

  actionOnRow(item) {
    console.log('Selected Item :',item);
    if (item.type == 1) {
      //TODO
      return;
    }
    this.props.navigation.push('Second');
  }

  renderItems(data_list, sectionIndex) {
    if (data_list.length != 0) {
      var i = -1;
      return data_list.map((data)=>{
        i++;
        return (
          <Child_Product key={i} itemData={data} index={i} item_list={data_list} section_index={sectionIndex} click_viewDetail={this.Doclick_viewDetail} />
        )
      })
    }
  }

  render() {
    return (
        <ImageBackground source={IMAGES.bg} style={styles.container}>
          <FlatList
            data= {this.state.data_list}
            keyExtractor={(item, index) => index.toString() }
            extraData= {this.state}
            renderItem={ ({item, index}) =>
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
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
  image: {
    height: '100%', width: '100%'
  }
});
