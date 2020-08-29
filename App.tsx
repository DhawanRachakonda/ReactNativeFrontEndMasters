import React, { ReactNode, useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ColorBoxItems, { ColorItem } from './ColorBoxItems';

interface IAppViewProps {
  children: ReactNode;
  styleObject: any;
}

const colorItemsList: ColorItem[] = [
  { name: 'Base03', hexCode: '#002b36' },
  { name: 'Base02', hexCode: '#073642' },
  { name: 'Base01', hexCode: '#586e75' },
  { name: 'Base00', hexCode: '#657b83' },
  { name: 'Base0', hexCode: '#839496' },
  { name: 'Base1', hexCode: '#93a1a1' },
  { name: 'Base2', hexCode: '#eee8d5' },
  { name: 'Base3', hexCode: '#fdf6e3' },
  { name: 'Yellow', hexCode: '#b58900' },
  { name: 'Orange', hexCode: '#cb4b16' },
  { name: 'Red', hexCode: '#dc322f' },
  { name: 'Magenta', hexCode: '#d33682' },
  { name: 'Violet', hexCode: '#6c71c4' },
  { name: 'Blue', hexCode: '#268bd2' },
  { name: 'Cyan', hexCode: '#2aa198' },
  { name: 'Green', hexCode: '#859900' },
];

const App = () => {
  const [colors, setColorList] = useState<ColorItem[]>([]);

  useEffect(() => {
    setColorList(colorItemsList);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text style={styles.bold}>
          Here are some basics of different colors
        </Text>
        <ColorBoxItems colorsList={colors} />
      </SafeAreaView>
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
