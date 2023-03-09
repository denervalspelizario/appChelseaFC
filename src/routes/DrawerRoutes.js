import React from 'react'; 
import Stadium from '../pages/Stadium'; 
import Sponsor from '../pages/Sponsor'; 
import Foundation from '../pages/Foundation';
import Honours from '../pages/Honours'; 
import CustomDrawer from '../components/CustomDrawer';


import { createDrawerNavigator } from '@react-navigation/drawer'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator

import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator(); 

export default function Routes(){
  return(
     <Drawer.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      drawerContent={CustomDrawer} 
      screenOptions={{
        
        
        drawerActiveBackgroundColor: '#FFF', // cor de fundo de rota ativada dentro do drawer

        drawerActiveTintColor: '#034694', // cor de link ativo

        drawerInactiveBackgroundColor: '#f1f1f1', // cor de fundo de rota não ativo dentro do drawer
        drawerInactiveTintColor: '#000'  //cor de link não ativo
        
      }}   
     
     >

      <Drawer.Screen //  elemento de tela
        name="TabRoutes" 
        component={TabRoutes} 
        options={{
          title:'Inicio'
        }}
        
      />
      <Drawer.Screen //  elemento de tela
        name="Stadium" 
        component={Stadium} 
        options={{
          title:'StamforBridge'
        }}
        
      />

      
      <Drawer.Screen //  elemento de tela
        name="Sponsor"
        component={Sponsor} 
        options={{
          title:'Patrocinios'
        }}
        
      />
      <Drawer.Screen //  elemento de tela
        name="Chelsea Foundation"
        component={Foundation} 
        
        
      />

      <Drawer.Screen //  elemento de tela
        name="Honours"
        component={Honours} 
        options={{
          title:'Conquistas'
        }}
        
      />
     </Drawer.Navigator>
  )
}
