import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Team from '../pages/Team';
import Ticket from "../pages/Ticket";
import New from '../pages/New';



const Tab = createBottomTabNavigator(); 

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Team"
                component={Team}
                
            />

            <Tab.Screen 
                name="Ticket"
                component={Ticket}
                
            />

            <Tab.Screen 
                name="New"
                component={New}
                
            />

        </Tab.Navigator>
    )
}