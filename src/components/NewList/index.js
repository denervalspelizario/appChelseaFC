import React , { useState }from 'react'; 
import { StyleSheet, Text, View, Image, SafeAreaView, Modal, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';  
import LogoChelsea from '../../../assets/Chelsea_FC.svg.png'
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



export default function Newlist({data}){ // acessando atravez de props o data = base de dados da variavel tasks 

    const [modal, setModal] = useState(false) // inicia modal desligado

    function sair(){ 
        if(modal === true){  
          setModal(false) 
        }
      }

    function entrar(){ 
        if(modal === false){  
          setModal(true) 
        }
      }  

  
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

                <View style={styles.containerTitleAndBtnModal}>
                  <Text style={styles.textTitle}>
                    {data.title}
                  </Text>

                  <TouchableOpacity onPress={entrar} style={styles.containerBtnLer}>
                    <Text style={styles.textBtnLer}>
                      Ler mais..
                    </Text>
                  </TouchableOpacity> 
                </View>
                
            </View>   
          
            <Modal 
                transparent={true}
                animationType='fade'                                
                visible={modal} 
            >

                <View style={styles.containerModal}>

                    <View style={styles.containerModalNew} >
                        <Image
                            source={data.newImage}
                            style={styles.modalImage}
                        />
                        <Text style={styles.textTitleModal}>
                            {data.title}
                        </Text> 
                        <ScrollView showsVerticalScrollIndicator={false}>
                          <Text style={styles.textNewModal}>
                            {data.new}
                          </Text>
                        </ScrollView>
                         
                        <View style={styles.containerBtn}>
                            <TouchableOpacity style={styles.btnModal}  onPress={sair}>
                                <Text style={styles.textBtnModal}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>          
                </View>
            </Modal>
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
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,

  },
  newImage: {
    width: '35%',
    height: 120,
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
  },

  textTitle: {
    color: '#034694',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    marginHorizontal: '4%',
    textAlign: 'center',
    
    
  },
  containerBtnLer: {
    alignItems: 'center',
    paddingTop: '10%'
  },
  textBtnLer: {
    color: '#034694',
    fontSize: 15,
    fontFamily: 'Roboto_500Medium_Italic',
    
  },
  containerModal: {
    marginTop: '25%',
    width: '80%',
    marginHorizontal: '10%',
    height: '70%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
  },

  modalImage: {
    width: 250,
    height: 150,
    marginTop: 20,
    marginLeft: '10%',
    borderRadius: 15,
  },
  textTitleModal: {
    color: '#034694',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    marginVertical: 10,
    borderBottomColor: '#034694',
    borderBottomWidth: 1.5,
    paddingBottom: 5,
    marginHorizontal: '10%',
    textAlign: 'center',
  },
  textNewModal: {
    textAlign: 'center',
    color: '#034694',
    marginHorizontal: '7%',
    fontSize: 18
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  btnModal: {
    backgroundColor: '#034694',
    borderRadius: 15,
    
  },
  textBtnModal: {
    color: '#FFF',
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
    
  },
  

    
  
});