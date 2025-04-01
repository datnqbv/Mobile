import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Pizza', image: require('../assets/pizza.jpg'), color: '#FF6B6B' },
  { id: 2, name: 'Burgers', image: require('../assets/burger.jpg'), color: '#4ECDC4' },
  { id: 3, name: 'Steak', image: require('../assets/steak.jpg'), color: '#45B7D1' },
];

const items = [
  { id: 1, name: 'Margherita Pizza', price: '$12.99', image: require('../assets/food1.jpg'), rating: 4.5 },
  { id: 2, name: 'Chicken Burger', price: '$8.99', image: require('../assets/food2.jpg'), rating: 4.2 },
];

const saleItems = [
  { id: 1, name: 'Pepperoni Pizza', price: '$9.99', originalPrice: '$14.99', image: require('../assets/food1.jpg'), rating: 4.3 },
  { id: 2, name: 'Beef Burger', price: '$6.99', originalPrice: '$10.99', image: require('../assets/food2.jpg'), rating: 4.0 },
];

const CategoryList = () => (
  <FlatList
    horizontal
    data={categories}
    renderItem={({ item }) => (
      <TouchableOpacity style={[styles.categoryItem, { backgroundColor: item.color }]}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.categoryList}
  />
);

const ItemList = ({ title, data, isSale = false }) => (
  <View style={styles.itemListContainer}>
    <Text style={styles.subtitle}>{title}</Text>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.itemPrice}>{item.price}</Text>
              {isSale && <Text style={styles.originalPrice}>{item.originalPrice}</Text>}
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemList}
    />
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search for meals or area" 
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="filter" size={20} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />

        {/* Popular Items */}
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <FlatList
          horizontal
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemList}
        />

        {/* Sale Items */}
        <Text style={styles.sectionTitle}>Sale-off Items</Text>
        <FlatList
          horizontal
          data={saleItems}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    padding: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  categoryItem: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  itemListContainer: {
    marginBottom: 20,
  },
  itemList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    width: 200,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemInfo: {
    padding: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
});

export default HomeScreen;
