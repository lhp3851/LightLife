import React,{Component} from 'react';
import {SafeAreaView,View,Text,StyleSheets,Button,Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from '../Details';
import ContactsScreen from '../Accounts/ContactsPage';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../resource/Icon/dove-40.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = ({ navigation }) =>{
    return {
      title:"Home",
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => navigation.push('Details',{name:'Home'})}
          title="Details"
          color="#fd7200"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Contacts')}
          title="Contacts"
          color="#fd7200"
        />
      ),
    };
  };


  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}

export default createStackNavigator({
  Home:{screen:HomeScreen},
  Contacts: {screen:ContactsScreen,
             navigationOptions: { tabBarVisible: false }},
  Details:{screen:DetailsScreen,
           navigationOptions: { tabBarVisible: false }},
});
