import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert } from 'react-native';

export default class App extends React.Component {
    render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'green'}}/>
        <ImageBackground source={{uri:'https://etcpg3uvcgs41q4ci23mfssr-wpengine.netdna-ssl.com/wp-content/themes/hisense-2-5/img/landing/fridge-single.png'}} style={{flex: 26, justifyContent: "center", alignItems: "center", backgroundColor: '#189412'}}>
          <Button
            onPress={() => {
    Alert.alert('Там пусто');
  }}
            title="Открыть"
            color="#841584"
          />
        </ImageBackground>
      </View>
    );
  }

}


