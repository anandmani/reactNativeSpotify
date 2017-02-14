import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Navigator} from 'react-native';

//This is not a class/functional component. It is just an instance exported

const navigationRouteMapper = {
    LeftButton: (route, navigator, index, navState) =>
     {
       if(route.id === '0')
        return null

      return <TouchableOpacity
              onPress = {() => navigator.pop()}
              >
              <Text
                style={[styles.navigationText, {paddingLeft: 20}]}
              >
                Back
              </Text>
            </TouchableOpacity>
     },

    RightButton: (route, navigator, index, navState) => null,

    Title: (route, navigator, index, navState) => <Text style={[styles.navigationText, styles.navigationTitle]}>{route.title}</Text>
  }

  //must be placed before Navigator. because, after hoisting, it's value will still be undefined. How does hoisting vary in classes? Is it why render is placed at the end?
  const styles = StyleSheet.create({
    navigationBar: {
      backgroundColor: "black",
      height: 50
    },
    navigationText: {
      marginVertical: 15,
      fontSize: 16,
      color: "white"
    },
    navigationTitle: {
      marginVertical: 20,
    }
  });

export default(
  <Navigator.NavigationBar
    routeMapper={navigationRouteMapper}
    style={styles.navigationBar}
  />
);
