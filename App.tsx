import React, { ReactNode, useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import ColorBoxItems, { ColorItem } from './ColorBoxItems';

interface IAppViewProps {
  children: ReactNode;
  styleObject: any;
}

const colorItemsList: ColorItem[] = [
  { name: 'Cyan', hexCode: '#008B8B' },
  { name: 'Blue', hexCode: '#1E90FF' },
  { name: 'Magenta', hexCode: '#FF00FF' },
  { name: 'Orange', hexCode: '#FFA500' },
];

const App = () => {
  const [colors, setColorList] = useState<ColorItem[]>([]);

  useEffect(() => {
    setColorList(colorItemsList);
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.bold}>Here are some basics of different colors</Text>
      <ColorBoxItems colorsList={colors} />
    </SafeAreaView>
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
