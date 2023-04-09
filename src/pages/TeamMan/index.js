import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, SafeAreaView } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 
import ManImage from '../../../assets/Team/manList/Ataque/joaoFelix.png'
import StaffImage from '../../../assets/Team/manList/comissao/grahamPotter.png'
import { Ionicons } from '@expo/vector-icons';
import Header from "../../components/Header";
import {
  useFonts,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export default function Team(){

 const navigation = useNavigation();  

 function voltar(){
  navigation.navigate('Team') 
  }

 function navegaStaff(){
  navigation.navigate('StaffMan') 
 }                                                                          
 
 function navegaMan(){
  navigation.navigate('Man') 
 }    
 
 
 let [fontsLoaded] = useFonts({
  Roboto_900Black,
});


if (!fontsLoaded) {
  return  <ActivityIndicator size="large" color="#034694" />;
} else {  

  return(
    
    <SafeAreaView style={styles.containerSafe}>
      <TouchableOpacity onPress={voltar} style={styles.btnBack}>
          <Ionicons name="arrow-back-circle-outline" size={32} color="#FFF" />
      </TouchableOpacity> 
      
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={ navegaStaff }  // 5 funcao chamada ao clicar (linha 10) cria a funcao e acessa ao clicar
          style={{marginBottom: '25%'}}
        >
        <View style={styles.containerTeam}>
          <View style={styles.containerImageTeam}>
            <Image
              source={StaffImage}
              style={styles.imageTeam}
            />
          </View>
        
          <View style={styles.containerTextTeam}>
            <Text style={styles.textTeam}>
              Staff
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        
       
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
                Players
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>  
    </SafeAreaView>

  )

}

}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: '#034394',
  },
  btnBack: {
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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