import React, {Component} from 'react';
import {Animated} from 'react-native';

export default class FadeInView extends Component{
  constructor(){
    super();
    this.state= {fade: new Animated.Value(0)}
  }

  componentDidMount(){
    Animated.timing(
      this.state.fade,
      {
        toValue: 1,
        delay: this.props.delay * 10,
        duration: 500 //default is 500. dont have to mention
      }
    ).start()
  }

  componentWillReceiveProps(){
    this.setState({fade: new Animated.Value(0)});
    Animated.timing(
      this.state.fade,
      {
        toValue: 1,
        delay: this.props.delay * 10,
        duration: 500 //default is 500. dont have to mention
      }
    ).start()
  }

  render(){
    return(
      <Animated.View style={{opacity: this.state.fade}}>
        {this.props.children}
      </Animated.View>
    )
  }
}

FadeInView.propTypes = {
  children: React.PropTypes.node,
  delay: React.PropTypes.number
}
