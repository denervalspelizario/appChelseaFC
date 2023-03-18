import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer' 
import LogoChelsea from '../../assets/Chelsea_FC.svg.png';
                                                                                    
                                                                                        

export default function CustomDrawer(props){  
                                                         
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
                    Bem-vindo!                                             
                </Text> 

            </View>

            <DrawerItemList   style={{ fontSize: 25}}
                
                {...props}   
            />
        </DrawerContentScrollView>
    )
}