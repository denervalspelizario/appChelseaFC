import React from "react";
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native'
import Trofeu1 from '../../../assets/Trofeus/t1.png'
import Trofeu2 from '../../../assets/Trofeus/t2.png'
import Trofeu3 from '../../../assets/Trofeus/t3.png'
import Trofeu4 from '../../../assets/Trofeus/t4.png'
import Trofeu5 from '../../../assets/Trofeus/t5.png'
import Trofeu6 from '../../../assets/Trofeus/t6.png'
import Trofeu7 from '../../../assets/Trofeus/t7.png'
import Trofeu8 from '../../../assets/Trofeus/t8.png'
import Trofeu9 from '../../../assets/Trofeus/t9.png'
import Trofeu10 from '../../../assets/Trofeus/t10.png'
import Trofeu11 from '../../../assets/Trofeus/t11.png'
import TrofeuList from '../../components/TrofeuList'
import Header from "../../components/Header";


let trofeuData = [ 
  {
    key: '1', trofeuImage: Trofeu1 , competicao: 'Copa do Mundo de Clubes da FIFA', qtdTrofeu: 1,
    temporada: '2021'
  },
  {
    key: '2', trofeuImage: Trofeu2 , competicao: 'Liga dos Campeões da UEFA', qtdTrofeu: 2,
    temporada: '2011/12 e 2020/21'
  },
  {
    key: '3', trofeuImage: Trofeu3 , competicao: 'Liga Europa da UEFA', qtdTrofeu: 2,
    temporada: '2012/13 e 2018/19'
  },
  {
    key: '4', trofeuImage: Trofeu4 , competicao: 'Recopa Europeia da UEFA', qtdTrofeu: 2,
    temporada: '1970/71 e 1997/98'
  },
  {
    key: '5', trofeuImage: Trofeu5 , competicao: 'Supercopa da UEFA', qtdTrofeu: 1,
    temporada: '1998 e 2021'
  },
  {
    key: '6', trofeuImage: Trofeu6 , competicao: 'Campeonato Inglês', qtdTrofeu: 6,
    temporada: '1954/55, 2004/05, 2005/06, 2009/10, 2014/15 e 2016/17'
  },
  {
    key: '7', trofeuImage: Trofeu11 , competicao: 'Copa da Inglaterra', qtdTrofeu: 1,
    temporada: '1969/70, 1996/97, 1999/00, 2006/07, 2008/09, 2009/10, 2011/12 e 2017/18'
  },
  {
    key: '8', trofeuImage: Trofeu7 , competicao: 'Copa da Liga Inglesa', qtdTrofeu: 5,
    temporada: '1964/65, 1997/98, 2004/05, 2006/07 e 2014/15'
  },
  {
    key: '9', trofeuImage: Trofeu8 , competicao: 'Copa de Membros Ingleses', qtdTrofeu: 2,
    temporada: '1985/86 e 1989/90'
  },
  {
    key: '10', trofeuImage: Trofeu9 , competicao: 'Supercopa da Inglaterra', qtdTrofeu: 4,
    temporada: '1955, 2000, 2005 e 2009'
  },
  {
    key: '11', trofeuImage: Trofeu10 , competicao: 'Campeonato Inglês - 2ª Divisão', qtdTrofeu: 2,
    temporada: '1983/84 e 1988/89'
  },
  
  
]



export default function Honours(){
  
  return(
   
  <SafeAreaView style={styles.container}>
    <Header/>
    <View style={styles.containerTicket}>

    
    <FlatList 
     data={trofeuData} // base de dados que a flatlista vai receber
     showsVerticalScrollIndicator={false}

     keyExtractor={(item) => item.key} //linkando o id da lista Game a lista do flatlist
     
     renderItem={ ({ item }) => ( // item contém toda a base de dados de Game(linha10), 
                                  //renderizando componente com props data(base de dados de Game)  
       <TrofeuList data={item}/> 
                           
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