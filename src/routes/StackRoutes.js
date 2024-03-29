import React from 'react'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator
import Man from '../pages/Man';
import Woman from '../pages/Woman';
import TeamMan from '../pages/TeamMan';
import TeamWoman from '../pages/TeamWoman';
import StaffMan from '../pages/StaffMan';
import StaffWoman from '../pages/StaffWoman';
import DrawerRoutes from './DrawerRoutes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
     <Stack.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      
     >
      <Stack.Screen 
        name="HomeStack" 
        component={DrawerRoutes} 
        options={{  // estilizacao da navegaçao
            headerShown: false, // desliga(false) e liga(true) cabeçario de navegação
          }}
        />
      <Stack.Screen 
        name="Woman"
        component={Woman} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      />
      <Stack.Screen 
        name="Man"
        component={Man} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      /> 
      <Stack.Screen 
        name="TeamMan"
        component={TeamMan} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      /> 
      <Stack.Screen 
        name="StaffMan"
        component={StaffMan} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      /> 
      <Stack.Screen 
        name="TeamWoman"
        component={TeamWoman} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      /> 
      <Stack.Screen 
        name="StaffWoman"
        component={StaffWoman} 
        options={{  // estilizacao da navegaçao
          headerShown: false, 
        }}
      /> 
      
     </Stack.Navigator>
  )
}
