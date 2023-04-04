import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, SafeAreaView } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 
import ManImage from '../../../assets/Team/TeamMan.png'
import WomanImage from '../../../assets/Team/TeamWoman.png'

import {
  useFonts,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export default function Team(){

    

 const navigation = useNavigation();  

 function navegaWoman(){
  navigation.navigate('TeamWoman') 
 }                                                                          
 
 function navegaMan(){
  navigation.navigate('TeamMan') 
 }    

 
 
 
 let [fontsLoaded] = useFonts({
  Roboto_900Black,
});


if (!fontsLoaded) {
  return  <ActivityIndicator size="large" color="#034694" />;
} else {  

  return(
    <View style={styles.container}>

       <View style={{marginBottom: '20%'}}>
        
        <TouchableOpacity 
          onPress={ navegaWoman }  // 5 funcao chamada ao clicar (linha 10) cria a funcao e acessa ao clicar
        >
          <View style={styles.containerTeam}>
        
            <View style={styles.containerImageTeam}>
            <Image
              source={WomanImage}
              style={styles.imageTeam}
            />
            </View>
        
            <View style={styles.containerTextTeam}>
              <Text style={styles.textTeam}>
                Woman
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        </View> 
       
        <TouchableOpacity style={styles.btnTeam}
          onPress={ navegaMan }  // 5 funcao chamada ao clicar (linha 10) cria a funcao e acessa ao clicar
        >
          <View style={styles.containerTeam}> 
            <View style={styles.containerImageTeam}>
              <Image
                source={ManImage}
                style={styles.imageTeam}
              />
            </View>
        
            <View style={styles.containerTextTeam}>
              <Text style={styles.textTeam}>
                Man
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        
    </View>

  )

}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#034394',
    paddingHorizontal: '10%'
    
  
  },
  imageTeam: {
    width: 120,
    height: 120
  },
  containerTeam: {
    flexDirection: 'row'
  },
  btnUp: {
    marginBottom: '5%'
  },

  containerImageTeam: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 150,
    width: '45%',
  },
  
  containerTextTeam: {
    width: '55%',
    backgroundColor: '#0090c7',
    paddingVertical: 20,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTeam: {
    color: '#FFF',
    fontFamily: 'Roboto_900Black',
    fontSize: 40,
    marginHorizontal: '4%',
    textAlign: 'center',
  },
  
  
});