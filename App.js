import React from 'react';
import { View, Text, ImageBackground, Button, Alert } from 'react-native';

import Camera from './Components/Camera';

export default class App extends React.Component {
    render() {
   
    return (
      
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e35628'}}/>
        <View style={{flex: 5, backgroundColor: '#e35623'}}/>
        <Button
  			onPress={onPressLearnMore}
  			title="Learn More"
  			color="#841584"
  			accessibilityLabel="Learn more about this purple button"
		/>
        <Camera></Camera>
      </View>
    );
  }

}


