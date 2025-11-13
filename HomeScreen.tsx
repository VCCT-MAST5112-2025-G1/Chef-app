import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MenuItemCard } from './MenuItemCard';
import { calculateAveragePrice } from './utils';
import { MenuItem } from './types';

interface Props {
  menu: MenuItem[];
}

export const HomeScreen: React.FC<Props> = ({ menu }) => {
  const avg = calculateAveragePrice(menu);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>
      <Text>Average Price: R{avg}</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
