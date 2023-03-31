import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import LogoImage from '../../../assets/Chelsea_FC.svg.png';

import { useFonts,  SourceSansPro_600SemiBold, } from '@expo-google-fonts/source-sans-pro';


export default function Man(){

    let [fontsLoaded] = useFonts({
        SourceSansPro_600SemiBold,
      });

      if (!fontsLoaded) {
        return  <ActivityIndicator size="large" color="#034694" />;

   } else {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={LogoImage}
                    style={styles.imageHeader}
                />
                <Text style={styles.textHeader}>
                    Man Team
                </Text>
            </View>
            <Text>
                
            </Text>
        </SafeAreaView>
    )
   }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#034694',
        flex: 1,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
        
    },
    imageHeader: {
        width: 60,
        height: 60,
    },
    textHeader: {
        fontSize: 38,
        marginLeft: 10,
        
        color: '#FFF',
        fontFamily: 'SourceSansPro_600SemiBold',
    }

});