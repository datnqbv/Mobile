import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';

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

const saleItems = [
  { id: 1, name: 'Sale 1', price: '0.5$', image: require('../assets/food1.jpg') },
  { id: 2, name: 'Sale 2', price: '2$', image: require('../assets/food2.jpg') },
];

const CategoryList = () => (
  <FlatList
    horizontal
    data={categories}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.categoryItem}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}
  />
);

const ItemList = ({ title, data }) => (
  <View style={styles.itemListContainer}>
    <Text style={styles.subtitle}>{title}</Text>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}
    />
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Explorer" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="gray" style={{ marginRight: 10 }} />
          <TextInput placeholder="Search for meals or area" style={styles.input} />
          <TouchableOpacity>
            <Feather name="filter" size={20} color="orange" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <Text style={styles.subtitle}>Top Categories</Text>
        <CategoryList />

        {/* Items */}
        <ItemList title="Popular Items" data={items} />
        <ItemList title="Sale-off Items" data={saleItems} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingBottom: 20 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
  },
  input: { flex: 1 },
  subtitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 10, 
    paddingLeft: 10 
  },

  categoryItem: { 
    alignItems: 'center', 
    marginRight: 15 
  },
  categoryImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    marginBottom: 5 
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  itemListContainer: { 
    marginTop: 20 
  },
  item: { 
    width: 140, 
    marginRight: 15, 
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 10, 
    marginBottom: 5 
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
