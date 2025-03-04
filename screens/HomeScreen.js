import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Pizza', image: require('../assets/pizza.jpg') },
  { id: 2, name: 'Burgers', image: require('../assets/burger.jpg') },
  { id: 3, name: 'Steak', image: require('../assets/steak.jpg') },
];

const items = [
  { id: 1, name: 'Food 1', price: '1$', image: require('../assets/food1.jpg') },
  { id: 2, name: 'Food 2', price: '3$', image: require('../assets/food2.jpg') },
  { id: 3, name: 'Food 3', price: '2$', image: require('../assets/food3.jpg') },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer</Text>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={{ marginRight: 10 }} />
        <TextInput placeholder="Search for meals or area" style={styles.input} />
        <TouchableOpacity>
          <Feather name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Top Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.subtitle}>Popular Items</Text>
      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 10 },
  input: { flex: 1 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  categoryItem: { alignItems: 'center', marginRight: 20 },
  categoryImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 5 },
  item: { marginRight: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10 },
  itemImage: { width: 100, height: 100, borderRadius: 10, marginBottom: 5 },
});

export default HomeScreen;
