import React , { useState }from 'react'; 
import { StyleSheet, Text, View, Image, SafeAreaView, Modal, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';  

import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from '@expo-google-fonts/roboto';



export default function WomanList({data}){ // acessando atravez de props o data = base de dados da variavel tasks 
  
 let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  
  
  if (!fontsLoaded) {
    return  <ActivityIndicator size="large" color="#034694" />;
  } else {    
      
  return(
    <SafeAreaView >
        <View style={styles.container}>
            <View style={styles.containerNew}>
                <Image
                    style={styles.newImage}
                    source={data.newImage}
                />

                <View style={styles.containerDadosTeam}>
                  <Text style={styles.textNumber}>
                    {data.number}
                  </Text>
                  <Text style={styles.subName}>
                    {data.subName}
                  </Text>
                  <Text style={styles.name}>
                    {data.name}
                  </Text>
                  <Text style={styles.position}>
                    {data.position}
                  </Text>

                  
                </View>
                
            </View>   
        </View>  
    </SafeAreaView>

  )

}

}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    
  },
  containerNew: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#034694',
    flexDirection: 'row',
  },
  newImage: {
    width: '35%',
    height: '90%',
    
  },
  containerDadosTeam: {
    width: '60%',
    backgroundColor: '#0090c7',
    paddingVertical: 20,
    height: '90%',
  },

  textNumber: {
    color: '#FFF',
    fontFamily: 'Roboto_900Black_Italic',
    fontSize: 32,
    textAlign: 'right',
    paddingRight: '10%'
  },
  subName: {
    color: '#FFF',
    fontFamily: 'Roboto_400Regular_Italic',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: '10%'

  },
  name: {
    color: '#FFF',
    fontFamily: 'Roboto_900Black',
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: '10%'
  },
  position: {
    color: '#FFF',
    fontFamily: 'Roboto_400Regular_Italic',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: '10%'
  }
  
});