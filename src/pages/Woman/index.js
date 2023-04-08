import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import LogoImage from '../../../assets/Chelsea_FC.svg.png';
import { useFonts,  SourceSansPro_600SemiBold, } from '@expo-google-fonts/source-sans-pro';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import WomanList from '../../components/WomanList'
import { dataWomanList } from "../../data/dataWomanList";


export default function Woman(){

    const navigation = useNavigation(); 

    function voltar(){
        navigation.navigate('TeamWoman') 
    }

    let [fontsLoaded] = useFonts({
        SourceSansPro_600SemiBold,
      });

      if (!fontsLoaded) {
        return  <ActivityIndicator size="large" color="#034694" />;

   } else {

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={voltar} style={styles.btnBack}>
                <Ionicons name="arrow-back-circle-outline" size={32} color="#FFF" />
            </TouchableOpacity> 
             
            <View style={styles.containerHeader}>

                <Image
                    source={LogoImage}
                    style={styles.imageHeader}
                />
                <Text style={styles.textHeader}>
                    Woman Team
                </Text>
            </View>
            <FlatList 
                data={dataWomanList} // base de dados que a flatlista vai receber
                showsVerticalScrollIndicator={false}

                keyExtractor={(item) => item.key} //linkando o id da lista Game a lista do flatlist
            
                renderItem={ ({ item }) => ( // item contém toda a base de dados de Game(linha10), 
                                        //renderizando componente com props data(base de dados de Game)  
                <WomanList data={item}/> 
                                  
              )}
            />
            
        </SafeAreaView>
    )
   }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#034694',
        flex: 1,
        
    },
    btnBack: {
        paddingTop: '10%',
        paddingLeft: '5%',
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '5%',
        
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