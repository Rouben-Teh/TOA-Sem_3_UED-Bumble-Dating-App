import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import PhoneLogin from './screens/PhoneLogin';
import VerificationCode from './screens/VerificationCode';
import Onboarding from './screens/Onboarding';
import DateModeSelection from './screens/DateModeSelection';
import Beeline from './screens/Beeline';
import Profile from './screens/Profile';
import ProfileDetails from './screens/ProfileDetails';
import UserProfileDetails from './screens/UserProfileDetails';
import BeelineProfileDetails from './screens/BeelineProfileDetails';
import Search from './screens/Search';
import Setting from './screens/Setting';
import EditProfile from './screens/EditProfile';
import Camera from './screens/Camera';
import BottomTabbar from './BottomTabbar';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function Apps() {
    
        return (
            <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                  <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{headerShown: false}}/>
                  <Stack.Screen name="VerificationCode" component={VerificationCode} options={{headerShown: false}}/>
                  <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>  
                  <Stack.Screen name="DateModeSelection" component={DateModeSelection} options={{headerShown: false}}/>  
                  <Stack.Screen name="BottomTabbar" component={BottomTabbar} options={{headerShown: false}}/>
                  <Stack.Screen name="Beeline" component={Beeline} options={{headerShown: false}}/>  
                  <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/> 
                  <Stack.Screen name="ProfileDetails" component={ProfileDetails} options={{cardStyleInterpolator: forFade, headerShown: false}}/> 
                  <Stack.Screen name="BeelineProfileDetails" component={BeelineProfileDetails} options={{cardStyleInterpolator: forFade, headerShown: false}}/>
                  <Stack.Screen name="UserProfileDetails" component={UserProfileDetails}  options={{cardStyleInterpolator: forFade, headerShown: false}}/>
                  <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
                  <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
                  <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
                  <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
                </Stack.Navigator>
              </NavigationContainer>
        );
  
}
