import React, {useState}  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

export default function Apps() {
      const [isLoadingComplete, setLoadingComplete] = useState(false);
      
        if (!isLoadingComplete) {
                return (
                    <AppLoading
                        startAsync={loadResourcesAsync}
                        onError={handleLoadingError}
                        onFinish={() => handleFinishLoading(setLoadingComplete)}
                    />
                );
            } else {
                return (
                    <Navigation/>
                );
            }
}

async function loadResourcesAsync() {

    await Promise.all([
        Font.loadAsync({
            'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
            'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
            'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
            'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}