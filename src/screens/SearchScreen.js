import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../data/data';

const SearchScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Xử lý khi nhận được kết quả filter từ màn hình Filters
  useEffect(() => {
    if (route.params?.filteredProducts) {
      setFilteredProducts(route.params.filteredProducts);
    }
  }, [route.params?.filteredProducts]);

  // Hàm tìm kiếm sản phẩm
  const searchProducts = (query) => {
    const searchText = query.toLowerCase();
    const baseProducts = route.params?.filteredProducts || products;
    
    const filtered = baseProducts.filter(product => 
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText)
    );
    setFilteredProducts(filtered);
  };

  // Xử lý khi người dùng nhập text tìm kiếm
  const handleSearch = (text) => {
    setSearchQuery(text);
    searchProducts(text);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productQuantity}>{item.quantity}, Price</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <Ionicons name="options" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {filteredProducts.length === 0 ? (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No products found</Text>
          </View>
        ) : (
          <FlatList
            data={filteredProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
        )}

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="grid-outline" size={24} color="#666" />
            <Text>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="compass-outline" size={24} color="#4CAF50" />
            <Text style={{ color: '#4CAF50' }}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="cart-outline" size={24} color="#666" />
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="heart-outline" size={24} color="#666" />
            <Text>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person-outline" size={24} color="#666" />
            <Text>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  productList: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
  },
});

export default SearchScreen; 