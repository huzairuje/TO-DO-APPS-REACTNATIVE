/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import App from './app/App.js'

export default class MyProject extends Component {
  render() {
    return (
      <App/>
    )
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
