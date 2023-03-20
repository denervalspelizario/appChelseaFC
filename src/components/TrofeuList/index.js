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



export default function TrofeuList({data}){ // acessando atravez de props o data = base de dados da variavel tasks 

    
    

  
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
            <View style={styles.containerTrofeulist}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.trofeuImage}
                        source={data.trofeuImage}
                    />
                </View>
                
                <View style={styles.containerTitleAndBtnModal}>
                  <Text style={styles.textTitle}>
                    {data.competicao}
                  </Text>
                  <Text style={styles.textSubTitle}>
                    Titulos : {data.qtdTrofeu}
                  </Text>
                  <Text style={styles.textSubTitle}>
                    Temporadas: {data.temporada}
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
    backgroundColor: '#034694',
  },
  containerTrofeulist: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#034694',
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,

  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
    height: 120,
    width: '30%',
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
  },
  
  containerTitleAndBtnModal: {
    width: '60%',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
    height: 120,
    paddingBottom: 10
  },

  textTitle: {
    color: '#034694',
    fontFamily: 'Roboto_700Bold',
    fontSize: 15,
    marginHorizontal: '4%',
    textAlign: 'center',
  },
  textSubTitle: {
    color: '#034694',
    fontFamily: 'Roboto_500Medium_Italic',
    fontSize: 14,
    marginHorizontal: '4%',
    textAlign: 'center',
  },
 
  
    
  
});