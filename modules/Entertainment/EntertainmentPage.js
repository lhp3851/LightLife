import React,{Component} from 'react';
import {View,Text,StyleSheets} from 'react-native';
import { createStackNavigator } from 'react-navigation';


class EntertainmentScreen extends React.Component{
  static navigationOptions = {
    title: 'Entertainment',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Entertainment Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Entertainment:{screen:EntertainmentScreen},
});
