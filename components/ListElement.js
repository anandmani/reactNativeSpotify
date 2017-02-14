//@flow

import React, {Component} from 'react';
import {TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image, Text, StyleSheet} from 'react-native';
const batmanLogo = require('../img/batman.jpg');

export default ListElement = ({text, image, navigator, navDetails}) => {

  return(
    <TouchableOpacity
      underlayColor= "blue"
      onPress = {() => navigator.push(navDetails)}
    >
      <View style={styles.listElement}>
        <Image
          source={(image !== null)?{uri: image}: batmanLogo}
          style={{height: 50, width: 50, marginRight: 20}}
        />
        <Text>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listElement: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  }
});

ListElement.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.object,
  navDetails: React.PropTypes.object,
  // navigator:
}
