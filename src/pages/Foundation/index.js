import React,{useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Image,TouchableOpacity, Modal, ScrollView } from 'react-native';
import {
    useFonts,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';

export default function Foundation(){

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
        Roboto_500Medium,
    Roboto_500Medium_Italic,
        Roboto_900Black,
      });
      
      
      if (!fontsLoaded) {
        return  <ActivityIndicator size="large" color="#034694" />;
      } else {    
    return(
        <SafeAreaView style={styles.containerSponsor}>
            <View style={styles.containertitle}>
                <Image
                    style={styles.logoChelseaSponsor}
                    source={require('../../../assets/chelseaIcon.png')}
                />    
                <Text style={styles.textFoundation}>
                    Chelsea Foundation
                </Text>
            </View>
            <View style={styles.containerFoundationBanner}>
                <Image
                    style={styles.imageFoundation}
                    source={require('../../../assets/Foundation/foundation1.png')}
                /> 
                <Text style={styles.textFoundationBanner}>
                    Formada em 2010, a Chelsea Foundation reúne o Football in the Community e o departamento de Educação junto com outras atividades beneficentes e 
                    comunitárias do clube, incluindo nosso trabalho internacional e projetos anti-discriminação.
                </Text>
                <TouchableOpacity  onPress={entrar} style={styles.containerBtnLer}>
                    <Text style={styles.textBtnLer}>
                      Ler mais..
                    </Text>
                </TouchableOpacity> 
                
            </View>
            <Modal 
                transparent={false}
                animationType='fade'                                
                visible={modal} 
            >
                <View style={styles.containerModal}>
                    <View style={styles.containerModalNew} >
                        <Image
                            style={styles.logoChelseaModal}
                            source={require('../../../assets/chelseaIcon.png')}
                        />    
                       
                        <Text style={styles.textTitleModal}>
                            Chelsea Foundation

                        </Text> 
                        <ScrollView showsVerticalScrollIndicator={false}>
                          <Text style={styles.textNewModal}>
                            Formada em 2010, a Chelsea Foundation reúne o Football in the Community e o departamento de Educação junto com outras atividades beneficentes e 
                            comunitárias do clube, incluindo nosso trabalho internacional e projetos anti-discriminação.
                          </Text>
                          <Text style={styles.textNewModal}>
                            Como um dos principais programas de responsabilidade social do futebol do mundo, a Chelsea Foundation usa o poder do futebol 
                            e do esporte para motivar, educar e inspirar. Acreditamos que o poder do futebol pode ser aproveitado para apoiar comunidades e 
                            indivíduos tanto em casa quanto no exterior.

                          </Text>
                          <Text style={styles.textNewModal}>
                            Além de nossos excelentes programas de desenvolvimento do futebol, a Chelsea Foundation trabalha em uma ampla gama de iniciativas 
                            com foco em emprego, educação, privação social, redução da criminalidade, infração juvenil e muito mais.
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
        </SafeAreaView>
        )
    }

}



const styles = StyleSheet.create({

containerSponsor: {
    flex: 1,
},
textFoundation: {
    color: '#034694',
    fontFamily: 'Roboto_900Black',
    fontSize: 24,  
},
containertitle: {
    backgroundColor: '#FFF',
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
}, 
logoChelseaSponsor: {
    width: 80,
    height: 80
},
imageFoundation: {
    width: '100%',
    height: '50%',
    
},
containerFoundationBanner: {
    flex: 2,
    backgroundColor: '#034694',
    textAlign: 'justify',

},
textFoundationBanner: {
    color: '#FFF',
    fontSize: 18,
    marginHorizontal: '5%',
    marginTop: '10%',
    fontFamily: 'Roboto_500Medium',
    textAlign: 'justify',
},

containerBtnLer: {
    alignItems: 'center',
    paddingTop: 10,
    marginTop: '5%'
},
textBtnLer: {
    color: '#034694',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    backgroundColor:'#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
},
containerModal: {
    marginVertical: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  containerModalNew: {
    alignItems: 'center'
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
  logoChelseaModal: {
    width: 120,
    height: 120
  },




})