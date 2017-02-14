//@flow
import Root from './components/Root';
import {AppRegistry} from 'react-native';
//
// import React from 'react';
// import {
//   View,
//   PanResponder,
//   NativeModules
// }            from 'react-native';
//
//
// const DevMenuTrigger = ({children}) => {
//   const {DevMenu} = NativeModules;
//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: (evt, gestureState) => {
//       if (gestureState.numberActiveTouches === 3) {
//         DevMenu.show();
//       }
//     },
//   });
//   return <View style={{flex: 1}} {...panResponder.panHandlers}>{children}</View>;
// };

//registerComponent 1st param is projectname, second is a function that returns the root node of the project.
//Note: The second param is a string and not a component <Root />
AppRegistry.registerComponent("FirstProject", () => Root);
