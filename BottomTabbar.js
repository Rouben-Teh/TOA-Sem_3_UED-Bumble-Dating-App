import * as React from 'react';
import {Button, Text, View, Image, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './screens/Profile';
import Homepage from './screens/Homepage';
import Chatbox from './screens/Chatbox';
// import Beeline from './screens/Beeline';

import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'; 

export default function BottomTab() {

  const Tab = createBottomTabNavigator();

  return(
    
    <Tab.Navigator 
    initialRouteName="bottomHomepage"
    tabBarOptions={{
      style:{position:'absolute', bottom:30, left:60, right:60, height:50, backgroundColor:'#FEC629', borderRadius:50},
      tabStyle: {borderRadius:50},
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      showLabel:false,
      safeAreaInsets:{bottom:0}
    }}>
      <Tab.Screen name="bottomProfile" component={Profile} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({size, focused, color}) => {
          return ( 
          (focused)?
          <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/profile_filled.png')}/>
              : <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/profile_unfill.png')}/>
              );
        }}}/>
      <Tab.Screen name="bottomHomepage" component={Homepage} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({size, focused, color}) => {
          return (
            (focused)?
            <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/home_filled.png')}/>
              : <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/home_unfill.png')}/>
              );
        }}}/>
      <Tab.Screen name="bottomChatbox" component={Chatbox} 
       options={{
        tabBarLabel: 'Conversation',
        tabBarIcon: ({size, focused, color}) => {
          return (
          (focused)?
          <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/chat_filled.png')}/>
              : <Image
              style={{
              width: 32,
              height: 32
            }}
              source={require('./assets/icons/chat_unfill.png')}/>
          );
        }}}/>
      
  </Tab.Navigator>
  )
}

//keep tabbar in another screen example: lazada, fb, insta
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Homepage} />
      <HomeStack.Screen name="Beeline" component={Beeline} />
    </HomeStack.Navigator>
  );
}