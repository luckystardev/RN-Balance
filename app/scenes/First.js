import React from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
import IMAGES from '../global/Image';
import Model from '../global/Model';
import NType from '../global/NType';

const deviceWidth = Dimensions.get('window').width;
const height_list = deviceWidth / 329 * 247;

export default class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: [
        { image: IMAGES.m0, type:  NType.menu, data:Model.list0 },
        { image: IMAGES.m1, type:  NType.menu, data:Model.list1 },
        { image: IMAGES.m2, type:  NType.menu, data:Model.list2 },
        { image: IMAGES.m3, type:  NType.menu, data:Model.list3 },
        { image: IMAGES.m4, type:  NType.menu, data:Model.list4 },
        { image: IMAGES.m5, type:  NType.menu, data:null },
        { image: IMAGES.m6, type:  NType.text, data:null },
        { image: IMAGES.m7, type:  NType.menu, data:null },
        { image: IMAGES.m8, type:  NType.menu, data:null },
        { image: IMAGES.m9, type:  NType.menu, data:null },
        { image: IMAGES.m10, type:  NType.menu, data:null },
        { image: IMAGES.m11, type:  NType.menu, data:null },
        { image: IMAGES.m12, type:  NType.menu, data:null }
      ]
    }
  }

  actionOnRow(item, index) {
    console.log(index);
    if (item.type == NType.text) { //text
      this.props.navigation.navigate('TextScene');
      return;
    }
    this.props.navigation.navigate('Second', {model: item.data, index:index});
  }

  render() {
    return (
        <ImageBackground source={IMAGES.bg} style={styles.container}>
          <FlatList
            data= {this.state.data_list}
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
  image: {
    height: '100%', width: '100%'
  }
});
