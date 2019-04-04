import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Camera, Permissions } from 'expo';

import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class CameraComponent extends React.Component {

    state = {
      hasCameraPermissions: null,
      type: Camera.Constants.Type.back
    };

    async componentWillMount(){
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermissions: status === 'granted' });
    }

    render() {
       
      const { hasCameraPermissions } = this.state.type;

      if (hasCameraPermissions === null)
      {
        return <View />
      }
      else if(hasCameraPermissions === false){
        return <Text>No access to camera</Text>
      }
      else{
        return (
        <View style={{flex:26}}>
          <Camera style={{flex:1}} type={this.state.type}>
            <Header 
              style={{position: 'absolute', backgroundColor: 'transparent', left: 0, top: 0, right: 0, zIndex: 100 }}
              >
            </Header>
            <View style={{ flex: 4 , alignItems: 'center'}}/>
            <View style={{ flex: 1, alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="circle-outline"
                style={{color: 'white', fontSize: 100}}
              >
              </MaterialCommunityIcons>
            </View>
          </Camera>
        </View>
        );
      }

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


