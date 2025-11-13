import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuItem } from './types';
import { MenuItemCard } from './MenuItemCard';
import { filterByCourse } from './utils';

interface Props {
  menu: MenuItem[];
}

export const FilterScreen: React.FC<Props> = ({ menu }) => {
  const [filtered, setFiltered] = useState<MenuItem[]>(menu);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      <View style={styles.buttons}>
        {['starter', 'main', 'dessert'].map(course => (
          <Button key={course} title={course.toUpperCase()} onPress={() => setFiltered(filterByCourse(menu, course))} />
        ))}
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});
