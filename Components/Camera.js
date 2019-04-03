import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

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
       
      const {hasCameraPermissions} = this.this.state;

      if(hasCameraPermissions === null)
      {
        return ( <View>/>);
      }
      else if(hasCameraPermissions === false){
        return ( <View><Text> No access to camera </Text>/>);
      }
      else{
        return (
        <View style={{flex:1}}>
          <Camera style={{flex:1}} type={this.state.type}></Camera>
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


