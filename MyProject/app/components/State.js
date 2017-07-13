/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet
} from 'react-native';

export default class State extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			name : '',
			location : '',
      headline : 'SAVANNAH APPS',
      bodyText : 'powered by Okky'
		};

	}

	redirect(param) 
  {
    if (param.length > 0) {
      this.props.navigation.navigate('Tab', {data : param});
    }
    else
    {
      Alert.alert('Silahkan masukan Nama terlebih dahulu')
    }
  }

	render() {
    let pic = {
      uri: 'https://static1.squarespace.com/static/53adb125e4b094aac18a8ee7/t/57b1504d29687fbd6a8216f4/1471877225667/F1+Savannah+Cat?format=500w'
    };	
  	return (
    
    		<View style={styles.container}>
          <Image source={pic} style={styles.backgroundImage}>

            <Text style={styles.headline}>{this.state.headline} {"\n"}</Text>    
            <Text style={styles.bodyText}>{this.state.bodyText}</Text>

      			<TextInput style={styles.TextContainer}
      				placeholder="Please Enter Your Name"
      				placeholderTextColor="#7fffd4"
      				onChangeText={
	      				(text) => {
	      					this.setState(
	      						{name:text} 
	      					)
	      				}
	      			}
      			/>

        		<View style={styles.buttonContainer}>
		          <Button
		          	color="#7fffd4"
		            onPress={() => {this.redirect(this.state.name)}}
		            title="Let Me In"
		          />
		        </View>
          </Image>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  buttonContainer: {
    margin: 20,
    width : 330,
  },
  TextContainer: {
    margin: 20,
    width : 330,
    color : "#7fffd4"
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 80,
    marginTop: 150,
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
  }
})