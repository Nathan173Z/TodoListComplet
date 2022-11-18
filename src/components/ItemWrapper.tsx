import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

interface ItemWrapperProps {
  children: ReactNode;
}

export function ItemWrapper({  children }: ItemWrapperProps) {
    return (
      <View  
        style={styles.list}
      >
        {children}
      </View>
    )
}

const styles= StyleSheet.create({

  list:{
    backgroundColor:'#262626',
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    height: 64,
    borderRadius:8,
    marginBottom:8,
    marginHorizontal:24,
  }
})