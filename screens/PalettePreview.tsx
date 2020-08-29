import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const PalettePreview = ({ item, onPress }: any) => {
  const { hexCode: hexColor } = item;
  const backgroundColorStyle = {
    backgroundColor: hexColor,
  };
  return (
    <TouchableOpacity
      style={[styles.palettePreview, backgroundColorStyle]}
      onPress={() => onPress(item)}
    />
  );
};

const styles = StyleSheet.create({
  palettePreview: {
    padding: 10,
    marginRight: 5,
  },
});

export default PalettePreview;
