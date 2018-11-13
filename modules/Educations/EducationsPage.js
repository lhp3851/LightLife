import React,{Component} from 'react';
import {View,Text,StyleSheets} from 'react-native';
import { createStackNavigator } from 'react-navigation';


class EducationsScreen extends React.Component{
  static navigationOptions = {
    title: 'Educations',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Educations Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Education:{screen:EducationsScreen},
});
