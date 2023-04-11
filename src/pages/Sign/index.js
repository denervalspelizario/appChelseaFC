import React,{useState, useContext} from 'react'; 
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
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth.js'


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



export default function Sign(){

 const [nome, setNome] = useState('')  
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const { cadastro, loadingAuth } = useContext(AuthContext)
 

 function funcaoCadastro(){          // funcao que ao clicar adiciona as states que são dados do input na 
                                     // funcao cadastro que envia esses dados la no firebase ( ver src > contexts > auth.js  )
  cadastro(email, password, nome)

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
          CADASTRO
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.icon} name="user" size={20} color="#FFF" />
        <TextInput
          style={styles.input}  
          placeholder='Nome' 
          underlineColorAndroid="transparent"   
          keyboardType='name-phone-pad'
          maxLength={40}  
          value={nome}
          onChangeText={(text) => setNome(text) }
        />
      </View>
      
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#FFF" />
        <TextInput
          style={styles.input}  
          placeholder='Email' 
          underlineColorAndroid="transparent"   
          keyboardType='name-phone-pad'  
          maxLength={120}  
          value={email}
          onChangeText={(text) => setEmail(text) }
        
        />
      </View>
      
      
      <View style={styles.inputContainer}>
        <FontAwesome style={styles.icon} name="lock" size={20} color="#FFF" />
        <TextInput
          style={styles.input}  
          placeholder="Senha"
          secureTextEntry={true} 
          autoCorrect={false} 
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text) }
          
        />
      </View>

     

        <TouchableOpacity 
          onPress={funcaoCadastro} 
          style={styles.btnLogin}  
        >
          {
            loadingAuth ?  // se state loadingauth estiver true 
                 ( <ActivityIndicator/> )  // icon de loading
              : 
                ( <Text style={styles.textBtn}>Cadastrar</Text> ) // senão renderiza o texto do btn 
          }

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
    width: 60,
    height: 60,
  },
  textLogo: {
    marginTop: 15,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
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