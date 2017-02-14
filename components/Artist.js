import React, {Component} from 'react';
import { WebView } from 'react-native';

export default class Artist extends Component{
  render(){
    return(
      <WebView
        source = {{ uri: this.props.url }}
        style= {{flex: 1, marginTop: 50}}
      />
    )
  }
}
