import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Image, } from 'react-native';
import {
    useFonts,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';
import Header from "../../components/Header";  




export default function Sponsor(){

    let [fontsLoaded] = useFonts({
        Roboto_900Black,
      });
      
      
      if (!fontsLoaded) {
        return  <ActivityIndicator size="large" color="#034694" />;
      } else {    
    return(
        <SafeAreaView style={styles.containerSponsor}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.containertitle}>

                <Image
                    style={styles.logoChelseaSponsor}
                    source={require('../../../assets/chelseaIcon.png')}
                />    
                <Text style={styles.textSponsor}>
                    SPONSORS
                </Text>

            </View>
            
            <View style={styles.containerSponsorUp}>
               
                <Image
                    style={styles.logoSponsor}
                    source={require('../../../assets/Sponsor/spremium1.png')}
                /> 
                <Image
                    style={styles.logoSponsor}
                    source={require('../../../assets/Sponsor/spremium2.png')}
                /> 
                <Image
                    style={styles.logoSponsor}
                    source={require('../../../assets/Sponsor/spremium3.png')}
                /> 
                

            </View>
            <View style={styles.containerSponsorLow}>

                <View style={styles.sponsorLowLine}>
                    <Image
                        style={[styles.logoSponsorLow, {}]}
                        source={require('../../../assets/Sponsor/slow1.png')}
                    /> 
                    <Image
                        style={styles.logoSponsorLow}
                        source={require('../../../assets/Sponsor/slow9.png')}
                    />    
                    <Image
                        style={styles.logoSponsorLow}
                        source={require('../../../assets/Sponsor/slow3.png')}
                    />  
                </View>
                <View style={styles.sponsorLowLine}>
                    <Image
                        style={[styles.logoSponsorLow, {}]}
                        source={require('../../../assets/Sponsor/slow4.png')}
                    /> 
                    <Image
                        style={styles.logoSponsorLow}
                        source={require('../../../assets/Sponsor/slow5.png')}
                    />   
                    <Image
                        style={styles.logoSponsorLow}
                        source={require('../../../assets/Sponsor/slow6.png')}
                    />  
                </View>
                <View style={styles.sponsorLowLine}>
                    <Image
                        style={[styles.logoSponsorLow, { color: '#FFF'}]}
                        source={require('../../../assets/Sponsor/slow7.png')}
                    /> 
                    <Image
                        style={styles.logoSponsorLow}
                        source={require('../../../assets/Sponsor/slow8.png')}
                    />   
                    
                </View>
            </View>
        </SafeAreaView>
        )
    }

}



const styles = StyleSheet.create({

containerSponsor: {
    flex: 1,
},
header: {
    backgroundColor: '#034694',
    paddingTop: 40,
    paddingLeft: 15
},
textSponsor: {
    color: '#FFF',
    fontFamily: 'Roboto_900Black',
    fontSize: 24,
    
},
containerSponsorUp: {
    backgroundColor: '#FFF',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
},
containerSponsorLow: {
    backgroundColor: '#f1f3f6',
    flex: 3
},
containertitle: {
    backgroundColor: '#034694',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}, 
logoChelseaSponsor: {
    width: 70,
    height: 70
},
logoSponsor: {
    width: 150,
    height: '30%',
    
},
logoSponsorLow: {
    width: '20%',
    height: 80,
    marginHorizontal: '5%'
    
    //borderRadius: 120
    
},
sponsorLowLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%'
    
}


})