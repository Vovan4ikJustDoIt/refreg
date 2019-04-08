import React from 'react';
import { View, Text, ImageBackground, Button, Alert } from 'react-native';

import Camera from './Components/Camera';

export default class App extends React.Component {
    render() {
   
    return (
      
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e35628'}}/>
        <Button
  			onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  			title="Learn More"
  			color="#841584"
  			accessibilityLabel="Learn more about this purple button"
		/>
        <Camera></Camera>
      </View>
    );
  }

}


