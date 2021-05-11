import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { dark, light } from '../themes';
import { currentTheme } from '../utils';

import { HeaderTop } from '../components';

import Home from '../pages/home';
import Search from '../pages/search';
import Details from '../pages/details';

const Stack = createStackNavigator();

function RouterStack() {

  const isDarkMode = currentTheme() === 'dark';

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content')
    StatusBar.setBackgroundColor(isDarkMode ? '#373737' : 'white')
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Stack.Navigator
        screenOptions={{
          header: () => <HeaderTop />
        }}
      >
        <Stack.Screen
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          name={"Search"}
          component={Search}
        />
        <Stack.Screen
          name={"Details"}
          component={Details}
          options={{
            headerShown: false,
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default RouterStack;