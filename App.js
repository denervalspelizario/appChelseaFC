import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import 'react-native-gesture-handler'; 
import AuthProvider from "./src/contexts/auth";


console.disableYellowBox=true  // comando para tirar alerta amarelo quando faz auth no firebase


export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
          backgroundColor="#131313"
          barStyle="light-content"
        />
        <Routes/>
      </AuthProvider>
      
    </NavigationContainer>
  )
}

