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
    let pic = {
      uri: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=2850&q=80'
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.navbar} />
        <Text style={styles.text}>Hello</Text>
        <View style={styles.main} />
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
