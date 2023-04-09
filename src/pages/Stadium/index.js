import React, {useState} from 'react';
import { StyleSheet, 
      Text, 
      View, 
      TouchableOpacity, 
      SafeAreaView, 
      ScrollView, 
      Image ,
      ActivityIndicator,
      Modal,
      TouchableWithoutFeedback
    } from 'react-native';  
import Stadium1 from '../../../assets/stadium/stadium1.jpeg'
import Stadium2 from '../../../assets/stadium/stadium2.jpg'
import Stadium3 from '../../../assets/stadium/stadium3.jpg'
import Stadium4 from '../../../assets/stadium/stadium4.jpg'
import Stadium5 from '../../../assets/stadium/stadium5.jpg'
import Stadium6 from '../../../assets/stadium/stadium6.jpg'
import Stadium7 from '../../../assets/stadium/stadium7.jpg'
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
import Header from "../../components/Header";

export default function Stadium(){

  const [modal, setModal] = useState(false) 
  const [modalFotos, setModalFotos] = useState(false) 

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
  
  function sairFotos(){ 
    if(modalFotos === true){  
      setModalFotos(false) 
    }
  }

function entrarFotos(){ 
    if(modalFotos === false){  
      setModalFotos(true) 
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
    <SafeAreaView style={styles.container}>  
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.containerStadium}>
      <Image 
        style={styles.imageStadium}
        source={Stadium1}
      />

      <View showsVerticalScrollIndicator={false} > 

        <View  style={styles.containerTextStadium}> 

          <Text style={styles.textTilteStadium}>
            Estadio Stamford Bridge
          </Text>

          <Text style={styles.textStadium}> 
            O Stamford Bridge é um estádio localizado no centro da cidade de Londres, sede do Chelsea Football Club. 
            Inaugurado em 1877, foi adquirido em 1896 pelos irmãos Gus e Joseph Mears.
          </Text>
          <Text  style={styles.textStadium}>
            Com capacidade para cerca de quarenta e três mil pessoas, foi inaugurado em 28 de abril de 1877. 
            O estádio foi construido pelos proprietários do London Athetics Club, para competições de atletismo, 
            e comprado pelos irmãos Gus e Joseph Mears em 1896, mas só tomando posse em 1904.
          </Text>
          
          <TouchableOpacity onPress={entrar}> 
            <Text style={styles.textBtnModalstadium}>
              Leia mais...
            </Text>
          </TouchableOpacity>
          <View>
        <Image 
          style={styles.imageStadiumList}
          source={Stadium3}
        />
        
        <TouchableOpacity style={styles.btnFotos} onPress={entrarFotos}>
          <Text style={styles.textBtnFotos}> 
            Acesse fotos do estadio
          </Text>
        </TouchableOpacity>
      </View>



        </View>
        <Modal 
            transparent={true}
            animationType='fade'                                
            visible={modal} 
          >
          
            <View style={styles.containerModalStadium}>

              <Text style={styles.textTilteStadiumModal}>
                Estadio Stamford Bridge
              </Text>

              <ScrollView showsVerticalScrollIndicator={false}>   
              <Text style={[styles.textStadium, {color: '#034694', fontSize: 14}]}> 
                O Stamford Bridge é um estádio localizado no centro da cidade de Londres, sede do Chelsea Football Club. 
                Inaugurado em 1877, foi adquirido em 1896 pelos irmãos Gus e Joseph Mears.
              </Text>
              <Text  style={[styles.textStadium, {color: '#034694', fontSize: 14}]}>
                Com capacidade para cerca de quarenta e três mil pessoas, foi inaugurado em 28 de abril de 1877. 
                O estádio foi construido pelos proprietários do London Athetics Club, para competições de atletismo, 
                e comprado pelos irmãos Gus e Joseph Mears em 1896, mas só tomando posse em 1904.
              </Text>
              <Text  style={[styles.textStadium, {color: '#034694', fontSize: 14}]}>
                A intenção dos irmãos Mears, era que o estádio recebesse partidas do mais alto nível do futebol. 
                Após fracassos em trazer partidas da elite do futebol inglês, resolveram vender o estádio, mas por 
                conselho de seu amigo Fred Parker, os irmãos Mears resolveram não vende-lo e, criar um clube para 
                disputar partidas no estádio, surgindo assim, o Chelsea Football Club.
              </Text>
              <Text style={[styles.textStadium, {color: '#034694', fontSize: 14}]}>
                Após obras de modernização, visando a segurança e o conforto dos espectadores, a capacidade do estádio 
                foi reduzida para 41.841 torcedores. Seu recorde de público deu-se em 12 de outubro de 1935, no clássico
                londrino contra o Arsenal, quando foram registrados 82.905 torcedores.
              </Text>
      
              </ScrollView>
              <TouchableOpacity style={styles.btnModalSair}  onPress={sair}>
                  <Text style={styles.textBtnModalSair}>Sair</Text>
              </TouchableOpacity>
            </View>       
        </Modal>

        <Modal 
            transparent={true}
            animationType='fade'                                
      
            visible={modalFotos} 
          >
          
            <View style={styles.containerModalStadium}>

              <Text style={styles.textTilteStadiumModal}>
                Estadio Stamford Bridge
              </Text>

              <ScrollView showsVerticalScrollIndicator={false}> 
              
                <Image 
                  style={styles.imageStadiumListModal}
                  source={Stadium3}
                />        
                <Image 
                  style={styles.imageStadiumListModal}
                  source={Stadium2}
                />
                <Image 
                  style={styles.imageStadiumListModal}
                  source={Stadium4}
                />
                <Image 
                  style={styles.imageStadiumListModal}
                  source={Stadium5}
                />
                <Image  
                  style={styles.imageStadiumListModal}
                  source={Stadium6}
                />
                <Image 
                  style={styles.imageStadiumListModal}
                  source={Stadium7}
                />   
              </ScrollView>
              <TouchableOpacity style={styles.btnModalSair}  onPress={sairFotos}>
                  <Text style={styles.textBtnModalSair}>Sair</Text>
              </TouchableOpacity>
            </View>       
          
        </Modal>
      </View>
      </View>
    </SafeAreaView>

  )

}

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerStadium: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#034694',
  },
  header: {
    backgroundColor: '#034694',
    paddingTop: 40,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  imageStadium: {
    width: '100%',
    height: 200,
    
  },
  textTilteStadium: {
    color: '#FFF',
    fontSize: 22,
    marginVertical: 10,
    fontFamily: 'Roboto_900Black_Italic',
  },
  textStadium: {
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    marginHorizontal: '10%',
    textAlign: 'center',
  },
  containerModalStadium: {
    backgroundColor: '#FFF',
    marginHorizontal: '10%',
    height: '60%',
    marginTop: '20%',
    alignItems: 'center',
    borderRadius: 20,
  },
  textTilteStadiumModal: {
    color: '#034694',
    fontSize: 22,
    fontFamily: 'Roboto_900Black_Italic',
    textAlign: 'center',
    paddingVertical: 10,

  },
  textBtnModalstadium: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Roboto_700Bold_Italic',
  },
  containerTextStadium: {
    marginVertical: 10,
    alignItems: 'center',
  },
  btnModalSair: {
    width: 80,
    
  },
  textBtnModalSair: {
    textAlign: 'center',
    color: '#FFF',
    marginVertical: 10,
    backgroundColor: '#034694',
    borderRadius: 15,
    paddingVertical: 5
    
    
  },
  imageStadiumList: {
    width: 300,
    height: 100,
    marginTop: '10%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  imageStadiumListModal: {
    width: 300,
    height: 150,
    marginTop: '10%',
    borderRadius: 10,
    

  },
  containerImageStadium: {
    marginHorizontal: '10%',
    marginVertical: 20

  },
  btnFotos: {
    alignItems: 'center',
  },
  textBtnFotos: {
    color: '#034694',
    backgroundColor: '#FFF',
    width: 300,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto_700Bold_Italic',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    
  }

  
});