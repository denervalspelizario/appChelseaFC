import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import LogoImage from '../../../assets/Chelsea_FC.svg.png'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>
                BEM VINDO 
            </Text>
            <Image
                source={LogoImage}
                style={styles.imageLogo}
            />
            <Text>
                APP DO MAIOR DE LONDRES
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#034694',
    },
    imageLogo: {
        width: 100,
        height: 100
    }
       
  });