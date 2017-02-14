//@flow
import React from 'react';
import {Navigator} from 'react-native';
import Main from './Main';
import Artist from './Artist';
import NavigationBar from './NavigationBar';

export default root = () => {
  //the route object can be used to pass data between routes
  const renderScene = (route, navigator) => {
    if(route.id === '0')
      return <Main navigator={navigator}/>

    return <Artist url={route.url} />
  }

  //Note we are not rendering a component <NavigationBar /> we are just rendering an instance already stored in NavigationBar
  return(
    <Navigator
      style={{flex: 1}}
      initialRoute={{ id: '0', title: 'Spotify Artist Lookup' }}
      renderScene = {renderScene}
      navigationBar = {NavigationBar}
    />
  );
}
