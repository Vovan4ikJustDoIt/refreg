import React from 'react';
import { View, Text, ImageBackground, Button, Alert } from 'react-native';

import Camera from './Components/Camera';

export default class App extends React.Component {
    render() {
   
    return (
      
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e35628'}}/>
        <Camera></Camera>
      </View>
    );
  }

}


