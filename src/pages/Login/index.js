import React, {useState, useContext}  from 'react'; 
import { StyleSheet, 
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
    ActivityIndicator,
    Platform 
   } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // 3 importando elemento para navegação
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
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';



export default function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loadingAuth } = useContext(AuthContext)

 const navigation = useNavigation();  // 3 adicionando elemento a funcao navigation

 function logar(){ // funcao acessada ao clicar no btn
    
  login(email, password) // funcao login recebendo os states que são os dados do input

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
          value={email}
          onChangeText={(text) => setEmail(text) }
        
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
          value={password}
          onChangeText={(text) => setPassword(text) }
          
        />
      </View>

        <TouchableOpacity 
          onPress={logar} 
          style={styles.btnLogin}   
        >
          {
            loadingAuth ?  // se state loadingauth estiver true
                 ( <ActivityIndicator/> )  // icon de loading
              : 
                ( <Text style={styles.textBtn}>Acessar</Text> ) // senão renderiza o texto do btn 
          }
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