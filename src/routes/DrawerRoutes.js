import React from 'react'; 
import Stadium from '../pages/Stadium'; 
import Sponsor from '../pages/Sponsor'; 
import Foundation from '../pages/Foundation';
import Honours from '../pages/Honours'; 


import { createDrawerNavigator } from '@react-navigation/drawer'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator

import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator(); 

export default function Routes(){
  return(
     <Drawer.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      
     
     >

      <Drawer.Screen //  elemento de tela
        name="TabRoutes" 
        component={TabRoutes} 
        
      />
      <Drawer.Screen //  elemento de tela
        name="Stadium" 
        component={Stadium} 
        
      />

      
      <Drawer.Screen //  elemento de tela
        name="Sponsor"
        component={Sponsor} 
        
      />
      <Drawer.Screen //  elemento de tela
        name="Chelsea Foundation"
        component={Foundation} 
        
      />

      <Drawer.Screen //  elemento de tela
        name="Honours"
        component={Honours} 
        
      />
     </Drawer.Navigator>
  )
}
