import React,{Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation';

import HomeScreen           from '../modules/Home/HomePage';
import EntertainmentScreen  from '../modules/Entertainment/EntertainmentPage';
import EducationsScreen     from '../modules/Educations/EducationsPage';
import ProfileScreen        from '../modules/Profile/ProfilePage';


const App = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Entertainment:{ screen: EntertainmentScreen },
  Education:{ screen: EducationsScreen,
              navigationOptions: { tabBarVisible: true }},
  Profile: { screen: ProfileScreen },
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Entertainment'){
          iconName = `ios-cafe`;
        } else if (routeName === 'Education'){
          iconName = `ios-book`;
        } else if (routeName === 'Profile'){
          iconName = `ios-person`;
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fd7200',
      inactiveTintColor: 'gray',
      safeAreaInset:{bottom: 'always', top: 'never'},
    },
  });

export default App;
