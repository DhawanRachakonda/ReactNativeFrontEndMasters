import React, { ReactNode } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

interface IAppViewProps {
  children: ReactNode;
  styleObject: any;
}

const AppView = ({ children, styleObject }: IAppViewProps) => {
  return <Text style={[styles.containerText, styleObject]}>{children}</Text>;
};

const App = () => {
  return (
    <SafeAreaView>
      <AppView styleObject={{ ...styles.bold }}>
        Here are some basics of different colors
      </AppView>
      <AppView styleObject={{ ...styles.cyan, ...styles.center }}>Cyan</AppView>
      <AppView styleObject={{ ...styles.blue, ...styles.center }}>Blue</AppView>
      <AppView styleObject={{ ...styles.magenta, ...styles.center }}>
        Magenta
      </AppView>
      <AppView styleObject={{ ...styles.orange, ...styles.center }}>
        Orange
      </AppView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerText: {
    padding: 10,
    marginBottom: 10,
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#008B8B',
  },
  blue: {
    backgroundColor: '#1E90FF',
  },
  magenta: {
    backgroundColor: '#FF00FF',
  },
  orange: {
    backgroundColor: '#FFA500',
  },
});

export default App;
