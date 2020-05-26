import React, { Component, useState, useEffect } from 'react';
import {
  View, StyleSheet, Image, FlatList, Dimensions, Text, ScrollView,
} from 'react-native';
import WebView from 'react-native-webview'; //vimeo

class VideoScene extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: 'https://vimeo.com/368772275' }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    width: '100%', height: '100%',
  },
});

export default VideoScene;