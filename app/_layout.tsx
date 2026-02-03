import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';

// import * as NavigationBar from 'expo-navigation-bar';

// const isAndroid = Platform.OS === 'android'

// if (isAndroid) {
  // NavigationBar.setBackgroundColorAsync('black')
  // NavigationBar.setPositionAsync('absolute'); // Esto hace que la app flote detrás de la barra
  // NavigationBar.setBackgroundColorAsync('#00000000');

// }

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) return null

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout