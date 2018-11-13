import React,{Component} from 'react';
import {View,Text,StyleSheets} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ProfileScreen extends React.Component{
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Profile:{screen:ProfileScreen},
});
