import React, { useState, useEffect} from "react";
import {View, Text, Image, StyleSheet, ActivityIndicator, SafeAreaView, Animated, LogBox } from 'react-native'
import LogoImage from '../../../assets/Chelsea_FC.svg.png'

import {
    useFonts,
    Roboto_700Bold,
    Roboto_900Black_Italic,
  } from '@expo-google-fonts/roboto';

export default function Home(){
    const [chelsea, setChelsea] = useState(new Animated.Value(280))
    const [maior, setMaior] = useState(new Animated.Value(-350))
    const [logo, setLogo] = useState(new Animated.Value(0))

   Animated.loop(
    Animated.parallel([
        Animated.timing( 
            chelsea,  
            {                             
                toValue: 0, 
                duration: 1500 
            },
                  
        ),
        Animated.timing(
            logo,  
            {                             
                toValue: 1, 
                duration: 2500, 
            },

        ),

        Animated.sequence([
            Animated.timing(
                maior,  
                {                             
                    toValue: 60, 
                    duration: 1000,
                },
        
            ),
                Animated.timing(
                    maior,  
                {                             
                    toValue: 0, 
                    duration: 1000,
                },
        
            ),
            Animated.timing(
                maior,  
            {                             
                toValue: 0, 
                duration: 1000,
            },
    
        ),
            Animated.timing( 
                chelsea,  
                {                             
                    toValue: 0, 
                    duration: 1000 
                },
                      
            ),
            Animated.timing(
                logo,  
                {                             
                    toValue: 1, 
                    duration: 1500, 
                },
    
            ),

        ])
        
        
    ]) // funcao para estartar a animação   

   ).start()
      
      
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']); // Importante funcao para desativar erro de useNativeDriver
  }, [])



    let [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_900Black_Italic,
      });
      
     
      
 if (!fontsLoaded) {
        return  <ActivityIndicator size="large" color="#034694" />;
   } else {

    return(
        <SafeAreaView style={styles.container}>
            <Animated.Text style={[{ bottom: chelsea, }, styles.textChelsea]}>
                Chelsea FC
            </Animated.Text>
            <Animated.Image
                source={LogoImage}
                style={[styles.imageLogo, {opacity: logo}]}
            />
            <Animated.Text style={[styles.textMaior, {left: maior}]}>
                O MAIOR CLUBE DE LONDRES
            </Animated.Text>

        </SafeAreaView>
    )

   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#034694',
    },
    imageLogo: {
        width: 150,
        height: 150,

    },
    textChelsea: {
        fontSize: 35,
        marginBottom: 20,
        fontFamily: 'Roboto_900Black_Italic',
        color: '#FFF',
        position: 'relative',
        
        
    },
    textMaior: {
        fontSize: 20,
        marginTop: 20,
        color: '#FFF',
        fontFamily: 'Roboto_700Bold',
        position: 'relative',
        
    }
       
  });