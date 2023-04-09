import React from 'react';
import { useNavigation } from '@react-navigation/native'
import LogoImage from '../../../assets/Chelsea_FC.svg.png'

import {View, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function Header() {

  const navigation = useNavigation()

  return (
     <View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.btn}>
        <Image
          source={LogoImage}
          style={styles.logo}
        />
      </TouchableOpacity>
     </View> 
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40
  }

     
});