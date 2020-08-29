import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from './PalettePreview';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const ColorPaletteTouchable = ({
  navigation,
  colorItemsList,
  palatteName,
}: any) => {
  return (
    <View>
      <Text style={styles.colorGroupText}>{palatteName}</Text>
      <FlatList
        horizontal={true}
        data={colorItemsList}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <PalettePreview
            item={item}
            onPress={(item: any) =>
              navigation.navigate('ColorPalette', {
                palatteName: item.colorName,
                colors: [item],
              })
            }
          />
        )}
      />
    </View>
  );
};

const Home = ({ navigation }: any) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <ColorPaletteTouchable
          navigation={navigation}
          palatteName={item.paletteName}
          colorItemsList={item.colors}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  colorGroupText: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Home;
