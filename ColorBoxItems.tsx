import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface IColorBoxProps {
  colorsList: ColorItem[];
}

export interface ColorItem {
  name: string;
  hexCode: string;
}

const ColorBox = ({ hexCode, name }: ColorItem) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[colorStyle, styles.containerText]}>
      <Text style={[styles.color, styles.center]}>
        Name: {name} ; Code: {hexCode}
      </Text>
    </View>
  );
};

const ColorBoxItems = ({ colorsList }: IColorBoxProps) => {
  return (
    <FlatList
      data={colorsList}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <ColorBox {...item} />}
      ListEmptyComponent={<Text>No Data Found</Text>}
    />
  );
};

const styles = StyleSheet.create({
  containerText: {
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  color: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorBoxItems;
