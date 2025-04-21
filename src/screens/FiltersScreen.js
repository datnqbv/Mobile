import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../data/data';

// Lấy danh sách categories và brands từ data
const categories = [...new Set(products.map(product => product.category))].map(
  (category, index) => ({
    id: (index + 1).toString(),
    name: category,
    selected: false,
  })
);

const brands = [...new Set(products.map(product => product.brand))].map(
  (brand, index) => ({
    id: (index + 1).toString(),
    name: brand,
    selected: false,
  })
);

const FiltersScreen = ({ navigation, route }) => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [selectedBrands, setSelectedBrands] = useState(brands);

  const toggleCategory = (id) => {
    setSelectedCategories(
      selectedCategories.map((category) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  const toggleBrand = (id) => {
    setSelectedBrands(
      selectedBrands.map((brand) =>
        brand.id === id
          ? { ...brand, selected: !brand.selected }
          : brand
      )
    );
  };

  const applyFilters = () => {
    const selectedCats = selectedCategories.filter(cat => cat.selected).map(cat => cat.name);
    const selectedBrandNames = selectedBrands.filter(brand => brand.selected).map(brand => brand.name);
    
    const filteredProducts = products.filter(product => {
      const matchCategory = selectedCats.length === 0 || selectedCats.includes(product.category);
      const matchBrand = selectedBrandNames.length === 0 || selectedBrandNames.includes(product.brand);
      return matchCategory && matchBrand;
    });

    navigation.navigate('Search', { filteredProducts });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filters</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            {selectedCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.checkboxContainer}
                onPress={() => toggleCategory(category.id)}
              >
                <View style={[
                  styles.checkbox,
                  category.selected && styles.checkboxSelected,
                ]}>
                  {category.selected && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Brand</Text>
            {selectedBrands.map((brand) => (
              <TouchableOpacity
                key={brand.id}
                style={styles.checkboxContainer}
                onPress={() => toggleBrand(brand.id)}
              >
                <View style={[
                  styles.checkbox,
                  brand.selected && styles.checkboxSelected,
                ]}>
                  {brand.selected && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={applyFilters}
        >
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FiltersScreen; 