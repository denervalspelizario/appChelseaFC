import React from "react";
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native'
import Chelsea from '../../../assets/chelseaIcon.png'
import Villa from '../../../assets/villa.png'
import Liverpool from '../../../assets/liverpool.png'
import Brighton from '../../../assets/brighton.png'
import Wolves from '../../../assets/wolverhampton.png'
import JogoList from '../../components/JogosList'
import Header from "../../components/Header";
import User from "../../components/User";

let Game = [ // sera como basde de dados
  {
    key: '1', timeC: Chelsea, timeV: Villa, rival: 'Everton',
    liga: 'Premiere League', data: 'Sat 01 Apr 2023', 
    estadio: 'Stamford Bridge', horario: '5:30 pm'
  },
  {
    key: '2', timeC: Chelsea, timeV: Villa, rival: 'Aston Villa',
    liga: 'Premiere League', data: 'Sat 01 Apr 2023', 
    estadio: 'Stamford Bridge', horario: '5:30 pm'
  },
  {
    key: '3', timeC: Chelsea, timeV: Liverpool,rival: 'Liverpool',
    liga: 'Premiere League', data: 'Tue 04 Apr 2023', 
    estadio: 'Stamford Bridge', horario: '8:00 pm'
  },
  {
    key: '4', timeC: Wolves, timeV: Chelsea, rival: 'Wolves',
    liga: 'Premiere League', data: 'Sat 08 Apr 2023', 
    estadio: 'Molineux Stadium', horario: '3:00 pm'
  },
  {
    key: '5', timeC: Chelsea, timeV: Brighton, rival: 'Brighton',
    liga: 'Premiere League', data: 'Sat 15 Apr 2023', 
    estadio: 'Stamford Bridge', horario: '3:00 pm'
  },
  
]


export default function Ticket(){

    return(
        <SafeAreaView style={styles.container}>
          <Header /> 
          <User/>
          <View style={styles.containerTicket}>
            <FlatList 
              data={Game} // base de dados que a flatlista vai receber
              showsVerticalScrollIndicator={false}

              keyExtractor={(item) => item.key} //linkando o id da lista Game a lista do flatlist
            
              renderItem={ ({ item }) => ( // item contém toda a base de dados de Game(linha10), 
                                        //renderizando componente com props data(base de dados de Game)  
              <JogoList data={item}/> 
                                  
              )}
            />
          </View> 
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034694',      
    paddingTop: 50,
    paddingLeft: 15,
    
  },
  containerTicket: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#034694',
    paddingTop: 10
  },
    
  });
