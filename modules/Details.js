import React,{Component} from 'react';
import {SafeAreaView,View,Text,Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class DetailsScreen extends Component {
  // constructor(props){
  //   super(props);
  //   Alert.alert(this.props.navigation.state.params.name);
  // }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
      </SafeAreaView>
    );
  }
}

export default createStackNavigator({
  Details:{screen:DetailsScreen,
           navigationOptions: { tabBarVisible: false }},
});
