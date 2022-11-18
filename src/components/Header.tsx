import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import logoImg from '../assets/images/logo/Logo.png';




export function Header() {
  
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
        
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:173,
    backgroundColor: '#0D0D0D',
    justifyContent:'center',
    alignItems: 'center',
  },
});