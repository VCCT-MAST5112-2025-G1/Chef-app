import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { MenuItem } from './types';
import { MenuItemCard } from './MenuItemCard';

interface Props {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export const ChefScreen: React.FC<Props> = ({ menu, setMenu }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (!name || !course || !price) return;
    const newItem: MenuItem = {
      id: Date.now(),
      name,
      course: course as any,
      price: parseFloat(price),
    };
    setMenu([...menu, newItem]);
    setName('');
    setCourse('');
    setPrice('');
  };

  const removeItem = (id: number) => {
    setMenu(menu.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Management</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Course (starter/main/dessert)" value={course} onChangeText={setCourse} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />

      <Button title="Add Menu Item" onPress={addItem} />

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <MenuItemCard item={item} />
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginVertical: 6, borderRadius: 8 },
});
