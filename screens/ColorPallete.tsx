import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { ColorItem, ColorBox } from '../ColorBoxItems';

const ColorPallete = ({ route }: any) => {
  const { colors, palatteName } = route.params;

  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.palatteName}
      renderItem={({ item }) => <ColorBox {...item} />}
      ListEmptyComponent={<Text>No Data Found</Text>}
      ListHeaderComponent={<Text style={styles.text}>{palatteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorPallete;
