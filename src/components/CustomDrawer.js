import React,{useContext} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer' 
import LogoChelsea from '../../assets/Chelsea_FC.svg.png';
import {AuthContext} from '../contexts/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
                                                                                    
                                                                                        

export default function CustomDrawer(props){  

    const { user, logout} = useContext(AuthContext) // acessando o user do contexto que contem os dados do usuario la no firebase
    const nomeUser  = user && user.nome //acessdando o uid do user e jogando na consta
                                                         
    return(
        <DrawerContentScrollView {...props} style={{backgroundColor: '#034694'}}>
            <View style={{  
                width: '100%',
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                
            }}>
                <Image 
                    source={LogoChelsea} 
                    style={{width: 90, height: 90}}
                />   

                <Text style={{color: '#FFF', fontSize: 20, marginTop: 25, fontWeight: 'bold', marginBottom: 35}}> 
                    Bem-vindo {nomeUser}!                                            
                </Text> 

            </View>

            <DrawerItemList   style={{ fontSize: 25}}
                
                {...props}   
            />
            <View style={styles.btnExit}>
                <TouchableOpacity onPress={() => logout()}>
                    <MaterialCommunityIcons name="exit-run" size={32} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.textExit}>Sair</Text>
            </View>    
            
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    btnExit: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20, 
    },
    textExit: {
        color: '#FFF',
        fontSize: 16,
    }
       
  });