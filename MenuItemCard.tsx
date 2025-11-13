import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from './types';

interface Props {
  item: MenuItem;
}

export const MenuItemCard: React.FC<Props> = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text>{item.course.toUpperCase()} - R{item.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
