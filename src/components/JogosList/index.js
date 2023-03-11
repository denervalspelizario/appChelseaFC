import React , { useState }from 'react'; 
import { StyleSheet, Text, View, Image, SafeAreaView, Modal, TouchableOpacity } from 'react-native';  
import Chelsea from '../../../assets/chelseaIcon.png'



export default function Task({data}){ // acessando atravez de props o data = base de dados da variavel tasks 

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
                                                                          
  return(
    <SafeAreaView style={styles.container}>

        <View style={styles.containerTicket}>
            <View style={styles.containerLogos}>
                <Image
                    style={styles.logoImage}
                    source={data.timeC}
                />
        
                <Image
                    style={styles.logoImage}
                    source={data.timeV}
                />
            </View>   
            <View style={styles.containerDadosJogo}>
               <Text style={styles.textRival}>
                    {data.rival}
                </Text> 
                <Text style={styles.textLiga}>
                    {data.liga}
                </Text> 
                <Text style={styles.textData}>
                    {data.data}
                </Text> 
                <Text style={styles.textEstadio}>
                    {data.estadio}
                </Text>
                <Text style={styles.textHorario}>
                    {data.horario}
                </Text> 
                
            </View>
            <View style={styles.containerModalTicket}>
                <TouchableOpacity onPress={entrar}>
                    <Text style={styles.textTicket}>
                        Comprar
                    </Text>
                </TouchableOpacity>
            </View> 
            <Modal 
                transparent={false}
                animationType='fade'                                 
                visible={modal} 
            >

                <View style={styles.containerModal}>
                    
                    <Image
                        source={Chelsea}
                        style={{width: 80, height: 80}}

                    />
                    <Text style={styles.textModal}>
                        INGRESSOS ESGOTADOS
                    </Text>
        
                    <TouchableOpacity style={styles.btn}  onPress={sair}>
                        <Text style={styles.textBtn}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>  
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex:  1
    
  },
  containerTicket: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    marginVertical: 10,
    borderRadius: 20,
    padding: 10
  },
  containerLogos: {
    height: 120,
    marginVertical: 10
  },
  logoImage: {
    width: 60,
    height: '45%',
    marginVertical: 5
  },
  containerDadosJogo: { 
    marginTop: 10,
    marginLeft: 10,
  },
  textRival: {
      color: '#034694',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
  }, 
  textLiga: {
    color: '#034694',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
  },
  textHorario: {
    textAlign: 'center',
    color: '#034694',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textEstadio: {
    textAlign: 'center',
    color: '#034694',
  },
  textData: {
    textAlign: 'center',
    color: '#FF0000',
  },
  containerModalTicket: {
    marginLeft: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTicket: {
    color: '#FFF',
    backgroundColor: '#034694',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,

  },
  containerModal: {
    width: 350,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#034694',
    borderRadius: 20,
    marginTop: '50%',
    marginHorizontal: '10%'
  },
  textModal: {
    color: '#FF0000',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: '#034694',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
  }
 
  
});