/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default class Props extends Component {
	
  constructor(props) {
    super(props)
  }

  redirect()
  {
    this.props.navigation.navigate('State');
  }
	render() {	
  	return (
    		<View>
          {/*<Text style={styles.headline}>{this.props.nama} {"\n"}</Text>    
          <Text style={styles.bodyText}>{this.state.bodyText}</Text>*/}
          <TouchableOpacity onPress = {() => {this.redirect()}}>
            <Text>ke State </Text>
          </TouchableOpacity>
    		</View>
  	)
	}
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 80,
    marginTop: 100,
    width: 200,
    color: "#7fffd4"
  },
  bodyText: {
    textAlign: 'center', // <-- the magic
    fontSize: 12,
    fontWeight : 'bold',
    marginLeft: 80,
    width: 200,
    color: "#f5fffa"
  },
})