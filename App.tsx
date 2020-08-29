import React, { ReactNode, useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPallete';

const Stack = createStackNavigator();

import ColorBoxItems, { ColorItem } from './ColorBoxItems';

interface IAppViewProps {
  children: ReactNode;
  styleObject: any;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }: any) => ({ title: route.params.palatteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
