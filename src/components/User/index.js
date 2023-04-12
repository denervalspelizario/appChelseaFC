import React,{useContext} from "react"
import {View, Text, StyleSheet} from 'react-native'
import {AuthContext} from '../../contexts/auth'

export default function User(){

  const { user} = useContext(AuthContext) // acessando o user do contexto que contem os dados do usuario la no firebase
  const nomeUser  = user && user.nome //acessdando o uid do user e jogando na consta uid

  return(
    <View>
      <Text style={styles.textUser}>Olá {nomeUser}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  textUser: {
      color: '#FFF',
      fontSize: 14,
      paddingVertical: 5, 
      fontWeight: 'bold'
  }
     
});