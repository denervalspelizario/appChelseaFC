import React from 'react'; 
import { StyleSheet, 
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
    ActivityIndicator,
    KeyboardAvoidingView  } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // 3 importando elemento para navegação
import LogoChelsea from '../../../assets/Chelsea_FC.svg.png'
import AppLoading from 'expo-app-loading';
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
import { FontAwesome } from '@expo/vector-icons';



export default function Login(){

 const navigation = useNavigation();  // 3 adicionando elemento a funcao navigation

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

let fontSize = 24;
let paddingVertical = 6;

if (!fontsLoaded) {
  return  <ActivityIndicator size="large" color="#034694" />;
} else {
                                                                          
  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          source={LogoChelsea}
          style={styles.logoStyle}
        />
        <Text style={styles.textLogo}>
          CHELSEA FC APP
        </Text>
      </View>

      

      
      <View style={styles.inputContainer}>
        <FontAwesome style={styles.icon} name="user" size={20} color="#FFF" />
        <TextInput
          style={styles.input}  
          placeholder='Email' 
          underlineColorAndroid="transparent"   
          keyboardType='email-address'  
          maxLength={120}  
        
        />
      </View>
      
      <View style={styles.inputContainer}>
        <FontAwesome style={styles.icon} name="lock" size={20} color="#FFF" />
        <TextInput
          style={styles.input}  
          placeholder="Password"
          secureTextEntry={true} 
          autoCorrect={false} 
          textContentType={'password'}
          
        />
      </View>

        <TouchableOpacity 
          onPress={()=> navigation.navigate('HomeStack')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 44 de app.js)*/   
          style={styles.btnLogin}   
        >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>

      
        
        
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Sign')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 44 de app.js)*/   
          style={styles.btnCadastro}    
        >
        <Text style={styles.textCadastro}>Cadastrar nova conta?</Text>
        </TouchableOpacity>
        
        
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
  loginContainer: {
    flex: 1
  },
  logoContainer: {
    marginBottom: '5%',
    alignItems: 'center',
  },
  logoStyle: {
    width: 85,
    height: 85,
  },
  textLogo: {
    marginTop: 15,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto_900Black_Italic',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    width: 200,
    marginBottom: 20,
    
  },
  input: {
    marginLeft: 10,
  },
  btnLogin: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: 100,
  },
  textBtn: {
    color: '#034694',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto_700Bold',
  },
  btnCadastro: {
   marginTop: '10%'
  },
  textCadastro: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',

  }

  
  
});