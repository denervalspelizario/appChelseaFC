import React,{useContext} from 'react'; 
import { AuthContext } from '../contexts/auth.js'
import { View, ActivityIndicator } from 'react-native'
import StackRoutes from './StackRoutes.js';
import AuthRoutes from './AuthRoutes';


 export default function Routes(){

  const { signed, loading } = useContext(AuthContext)

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <ActivityIndicator size='large' color='#131313'/>
      </View>
   )
  }
  return(
     signed ? <StackRoutes/> : <AuthRoutes/>
  )
}
