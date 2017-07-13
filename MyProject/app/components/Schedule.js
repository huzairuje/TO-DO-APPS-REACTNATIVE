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
  Button,
  Alert
} from 'react-native';

export default class Schedule extends Component {
	
  constructor(props) {
    super(props)
    this.state = {
      headline : 'Hello',
      bodyText : 'Apakah anda ingin membuat jadwal hari ini ?'
    };

  }
  click()
  {
    Alert.alert('Mohon maaf belum tersedia')
  }

	render() {
    const {state} = this.props.navigation	
  	return (
    		<View style={styles.container}>
          <Text style={styles.headline}>{this.state.headline} {state.params.data} {"\n"}</Text>    
          <Text style={styles.bodyText}>{this.state.bodyText}</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.buttonContainer}
              onPress={() => {this.click()}}
              title="Buat Jadwal"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
  	)
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   marginTop : 0
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 80,
    marginTop: -200,
    width: 200,
    color: "#ff1493"
  },
  bodyText: {
    textAlign: 'center', // <-- the magic
    fontSize: 12,
    fontWeight : 'bold',
    marginLeft: 80,
    width: 200,
    color: "#ff1493"
  },
   buttonContainer: {
    marginLeft: 100,
    width : 160,
  }
})