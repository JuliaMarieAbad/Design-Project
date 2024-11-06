import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import HomeScreen from './screens/HomeScreen';
import TutorialScreen from './screens/TutorialScreen';
import WalkthroughScreen from './screens/WalkthroughScreen';
import RetDemScreen from './screens/RetDemScreen';
import FinishScreen from './screens/FinishScreen'; 
import FinishRDScreen from './screens/FinishRDScreen'; 

const Stack = createStackNavigator();

export default function App() {
  console.log("App is rendering");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Directory" component={DirectoryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
        <Stack.Screen name="RetDem" component={RetDemScreen} />
        <Stack.Screen name="Finish" component={FinishScreen} />
        <Stack.Screen 
          name="FinishRDScreen" 
          component={FinishRDScreen} 
          options={{ title: 'Finish' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
