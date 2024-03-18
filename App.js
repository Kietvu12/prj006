import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    title : require("./assets/fonts/JacquesFrancois-Regular.ttf")
  })
  const onLayoutRootView = useCallback(async() =>{
    if(fontLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontLoaded] );
  if(!fontLoaded){
    return null;
  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Bottom Navigator'
      component={BottomTabNavigation}
      options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

