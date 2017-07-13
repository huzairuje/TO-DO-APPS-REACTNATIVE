/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import State from './components/State'
import Props from './components/Props'
import Schedule from './components/Schedule'
import {Stack} from './Router'

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://static1.squarespace.com/static/53adb125e4b094aac18a8ee7/t/57b1504d29687fbd6a8216f4/1471877225667/F1+Savannah+Cat?format=500w'
    };

    return (
      <Stack/>
    )
  }
}