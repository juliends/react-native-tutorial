import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  render() {
    return(
      <Text>2nd component</Text>
    )
  }
}


export default class App extends Component {
  render() {
    const { viewStyle, navbar, main, footer } = styles;
    return (
      <View style={viewStyle}>
        <View style={navbar}/> 
        <View style={main}>
          <Text style={{fontSize: 30}}>Hey</Text>
        </View>
        <View style={footer} />
      </View>
    );
  }
};

const styles = {
  viewStyle: {
    flex: 1
  },
  text: {
    color: 'black'
  },
  navbar: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  main: {
    flex: 8,
    backgroundColor: 'skyblue'
  },
  footer: {
    flex: 1,
    backgroundColor: 'steelblue'
  }
};
