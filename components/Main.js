//@flow
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ListView, Image, StatusBar} from 'react-native';
import ListElement from './ListElement';
import search from '../utils/fetcher';
import {debounce} from 'lodash';
import FadeInView from './FadeInView';
// export default class Main extends Component{
//   render(){
//     return(
//       <View>
//         <Text style={styles.helloWorld}>
//           Hello World
//           {console.warn("Use this to debug. Also, can use console.log and track it with react-native log-android")}
//         </Text>
//       </View>
//     )
//   }
// }

export default class Main extends Component{

  constructor(){
    super();
    const ds  = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      dataSource: ds.cloneWithRows([])
    };
  }

  //sid = sectionId, rid = rowId. sid can be used to make 2D lists
  renderRow = (rowObj, sid, rid) => {
    const navDetails = {
      id: "1",
      title: rowObj.name,
      url: rowObj.external_urls.spotify
    }
    return (rowObj)?
      <FadeInView delay={Number(rid)}>
        <ListElement text={rowObj.name} image={rowObj.images[0]? rowObj.images[0].url : null} navDetails={navDetails} navigator={this.props.navigator} />
      </FadeInView>
      :
      null
  }

  //debouncing search function so that wasteful fetch calls arent made
  searchString = debounce(
    (text) => {
      search(text)
      .then((response) => {
        this.setState({
          //notice how this is set!
          dataSource: this.state.dataSource.cloneWithRows(response)
        })
      })
      .catch((error) => {
        console.error(error);
      })
    }, 400);

  render(){
    return(
      <View style={{marginTop: 50}}>
        {/* <StatusBar barStyle="light-content"/> */}
        <TextInput
          placeholder="Search artist"
          value={this.state.input}
          onChangeText={this.searchString}
        />
        {/* <Image source={{uri:"http://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}} style={{width: 193, height: 110}} /> */}
        <ListView
          dataSource={this.state.dataSource}
          renderRow = {this.renderRow}
        />
      </View>
    );
  }
}

//Can set inline styles like react, but we are defining them here so to memoize them so that they dont get regenerated on each render
const styles = StyleSheet.create({
  helloWorld: {
    color: "blue"
  }
});
