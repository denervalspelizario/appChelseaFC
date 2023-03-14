import React from "react";
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native'
import NewImage1 from '../../../assets/newsImage/new1.png'
import NewImage2 from '../../../assets/newsImage/New2.png'
import NewImage3 from '../../../assets/newsImage/New3.png'
import NewImage4 from '../../../assets/newsImage/New4.png'
import NewImage5 from '../../../assets/newsImage/New6.png'
import NewImage6 from '../../../assets/newsImage/New7.png'
import NewList from '../../components/NewList'


let Newdata = [ // sera como basde de dados
  {
    key: '1', newImage: NewImage1 , title: 'Havertz satisfeito com a vitória',
    new: 'Kai Havertz destacou a importância de nossa vitória fora de casa no Leicester e expressou sua satisfação por ter recebido a liberdade de jogar em áreas ofensivas de Graham Potter O internacional alemão, muitas vezes escalado como nosso atacante central em três frentes, estava entre os gols em nossa vitória por 3 a 1 fora de casa em East Midlands, marcando um segundo impressionante após receber assistência de Enzo Fernandez .Seu gol veio ao lado de gols igualmente bons de Ben Chilwell e Mateo Kovacic , já que o Chelsea registrou a terceira vitória da semana e o atacante acredita que os Blues estão começando a virar a esquina após uma sequência difícil em 2023.'
    
  },
  {
    key: '2', newImage: NewImage2 , title: 'Chelsea FC receberá Open Iftar em Stamford Bridge ',
    new: 'No domingo, 26 de março, a Chelsea Foundation sediará um Open Iftar ao lado do campo em Stamford Bridge, no que será a primeira vez para o clube e um estádio da Premier League. Isso será realizado como parte do Ramadã, o mês islâmico de jejum antes do amanhecer ao pôr do sol, que ocorre de quarta-feira, 22 de março, a sexta-feira, 21 de abril. O maior evento comunitário do Reino Unido no Ramadã, o Open Iftar permite que os muçulmanos que observam o Ramadã tenham a oportunidade de se reunir para quebrar o jejum juntos, além de fornecer um espaço seguro para diálogo e engajamento mútuos. Várias mesquitas locais e membros da comunidade muçulmana do Chelsea, como torcedores e alunos da escola, serão convidados a participar, juntamente com a equipe do Chelsea FC.'
    
  },
  {
    key: '3', newImage: NewImage3 , title: 'Hayes: Fleming se orgulha de defender',
    new: 'Emma Hayes picked out Jessie Fleming as a star performer in Sunday’s crucial victory over Manchester United, saying she has reaped the rewards for the hard graft she has put in on the training field at Cobham. The Canadian featured in her 12th game of our WSL season in the crucial win over Marc Skinner’s side, positioned in the engine room although operating in a slightly more advanced role than normal.'
    
  },
  {
    key: '4', newImage: NewImage4 , title: 'Santos brilha e Vasco da Gama chega às semifinais',
    new: 'Andrey Santos ganhou nossa honra de Desempenho de Empréstimo da Semana depois de brilhar em seu retorno ao Vasco da Gama, ajudando-o a chegar às semifinais do Campeonato Carioca.'
    
  },
  {
    key: '5', newImage: NewImage5 , title: 'Hayes orgulhoso do desempenho defensivo',
    new: 'Emma Hayes diz que nosso desempenho contra o Manchester United foi uma saída da qual nos orgulhamos imensamente, pois voltamos ao topo da Superliga Feminina. O Chelsea chegou a 13 jogos sem perder na luta principal, graças ao belo gol de Sam Kerr no primeiro tempo. Após a disputa, Hayes refletiu sobre o desempenho, atualizou sobre a lesionada Erin Cuthbert e explicou por que houve quatro mudanças em seu lado. Esse foi o nosso terceiro jogo em uma semana e são três pontos. Tivemos lesões e doenças na equipe, então isso mostra exatamente por que a equipe é importante. Os jogadores que entraram cumpriram. "Achei que estávamos confortáveis ​​e a melhor equipe. Sabíamos que íamos ficar sem bola, por isso tínhamos de estar estruturados e defensivamente pensei que estávamos. Acho que poderíamos ter vencido por mais", disse Hayes.'
    
  },
  {
    key: '6', newImage: NewImage6 , title: 'Os destaques da vitória em Leicester City',
    new: 'O Chelsea registrou a terceira vitória em sete dias no Leicester City no sábado, quando marcamos três gols pela primeira vez desde o início de outubro e aqui analisamos os jogadores de destaque… Os Blues marcaram três gols excelentes no King Power Stadium, com Ben Chilwell, Kai Havertz e finalmente Mateo Kovacic marcando voleios para nos garantir os três pontos e continuar nossa boa forma. A equipe de Graham Potter certamente encontrou nossas chuteiras: marcando tantos gols contra os Foxes ontem [3] quanto marcamos em todas as competições durante todo o mês de janeiro. Aqui, analisamos como isso aconteceu em East Midlands.'
    
  },
  
]


export default function New(){

    return(
        <SafeAreaView style={styles.containerTicket}>
           <FlatList 
            data={Newdata} // base de dados que a flatlista vai receber
            showsVerticalScrollIndicator={false}

            keyExtractor={(item) => item.key} //linkando o id da lista Game a lista do flatlist
            
            renderItem={ ({ item }) => ( // item contém toda a base de dados de Game(linha10), 
                                        //renderizando componente com props data(base de dados de Game)  
              <NewList data={item}/> 
                                  
              )}
          />
           
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerTicket: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#034694'
    },
    
  });
