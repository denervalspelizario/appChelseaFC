import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Team from '../pages/Team';
import Ticket from "../pages/Ticket";
import New from '../pages/New';
import Home from '../pages/Home';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Tab = createBottomTabNavigator(); 

export default function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#034694',
                headerShown: false,
                tabBarShowLabel: false,   
                tabBarStyle: { // estilizando toda a tab
                    backgroundColor: '#FFF',
                    borderTopWidth: 0 // retirando toda borda de cima
                  } 
            }}
        
        
        >

            <Tab.Screen 
                name="Home"
                component={Home}
                options={{

                    tabBarIcon: ({color, size}) => { // alterando icon da screen
                      return <FontAwesome name="home" size={size} color={color} /> 
                    }
                  
                  }}
                
            />
            <Tab.Screen 
                name="Team"
                component={Team}
                options={{

                    tabBarIcon: ({color, size}) => { // alterando icon da screen
                      return <Ionicons name="football" size={size} color={color} />
                    }
                  
                  }}
                
            />

            <Tab.Screen 
                name="Ticket"
                component={Ticket}
                options={{

                    tabBarIcon: ({color, size}) => { // alterando icon da screen
                      return <FontAwesome name="ticket" size={size} color={color} />
                    }
                  
                  }}
                
                
            />

            <Tab.Screen 
                name="New"
                component={New}
                options={{

                    tabBarIcon: ({color, size}) => { // alterando icon da screen
                      return <Entypo name="news" size={size} color={color} />
                    }
                  
                  }}
                
            />

        </Tab.Navigator>
    )
}