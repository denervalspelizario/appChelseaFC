import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';  



export default function Stadium(){
  
  return(
    <View style={styles.container}>
      <Text>Stadium page</Text>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});