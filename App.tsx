import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { HomeScreen } from './HomeScreen';
import { ChefScreen } from './ChefScreen';
import { FilterScreen } from './FilterScreen';
import { initialMenu } from './menuData';
import { MenuItem } from './types';

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);
  const [screen, setScreen] = useState<'home' | 'chef' | 'filter'>('home');

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Button title="Home" onPress={() => setScreen('home')} />
        <Button title="Chef" onPress={() => setScreen('chef')} />
        <Button title="Filter" onPress={() => setScreen('filter')} />
      </View>

      {screen === 'home' && <HomeScreen menu={menu} />}
      {screen === 'chef' && <ChefScreen menu={menu} setMenu={setMenu} />}
      {screen === 'filter' && <FilterScreen menu={menu} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40 },
  nav: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
});
