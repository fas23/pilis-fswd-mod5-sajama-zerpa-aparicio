
import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/llamaJujuy.png')}>
        <Text style={styles.title}>
          El sitio donde vas a encontrar todos los eventos de jujuy!!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}
