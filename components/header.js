import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
  const { main } = styles
  return() {
    <View style={main}>
      <Text style={text}>{props.headerText}</Text>
    </View>
  }
};

const styles = {
  main: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};
