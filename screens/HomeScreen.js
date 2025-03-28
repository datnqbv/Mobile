import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ addToCart }) => {
  const categories = [
    { id: 'pizza', icon: 'pizza', label: 'PIZZA', backgroundColor: '#E8F5E9' },
    { id: 'burger', icon: 'burger', label: 'BURGER', backgroundColor: '#FFF3E0' },
    { id: 'drink', icon: 'wine', label: 'DRINK', backgroundColor: '#E3F2FD' },
    { id: 'rice', icon: 'restaurant', label: 'RICE', backgroundColor: '#F3E5F5' },
  ];

  const popularItems = [
    { id: 'burger', image: require('../assets/burger.png'), label: 'BURGER' },
    { id: 'pizza', image: require('../assets/pizza.jpg'), label: 'PIZZA' },
  ];

  const featuredItem = {
    id: 'burger',
    label: 'BURGER',
    image: require('../assets/burger.png'),
    discount: '10% OFF',
    subtitle: "Today's Hot Offer",
    rating: '4.5 (25+ Rating)',
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.locationLabel}>Your Location</Text>
            <Text style={styles.locationText}>Savar, Dhaka</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your food" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryButton}>
            <View
              style={[
                styles.categoryIconContainer,
                { backgroundColor: category.backgroundColor },
              ]}
            >
              <Icon name={category.icon} size={24} color="#007bff" />
            </View>
            <Text style={styles.categoryText}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Thêm lại Promo Container */}
      <View style={styles.promoContainer}>
        <View style={styles.promoDetails}>
          <View style={styles.promoDiscount}>
            <Text style={styles.promoDiscountText}>{featuredItem.discount}</Text>
          </View>
          <Text style={styles.promoTitle}>{featuredItem.label}</Text>
          <Text style={styles.promoSubtitle}>{featuredItem.subtitle}</Text>
          <View style={styles.promoRating}>
            <Icon name="star" size={16} color="#ffd700" />
            <Text style={styles.promoRatingText}>{featuredItem.rating}</Text>
          </View>
        </View>
        <Image
          source={featuredItem.image}
          style={styles.promoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.popularHeader}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularItemsContainer}
      >
        {popularItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.popularItemCard}
            onPress={() => addToCart()}
          >
            <Image
              source={item.image}
              style={styles.popularItemImage}
              resizeMode="cover"
            />
            <Text style={styles.popularItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f2f3',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#007bff',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryButton: {
    alignItems: 'center',
  },
  categoryIconContainer: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: '#007bff',
  },
  promoContainer: {
    backgroundColor: '#1a2541',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  promoDetails: {
    flex: 1,
  },
  promoDiscount: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  promoDiscountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  promoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promoSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  promoRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promoRatingText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  promoImage: {
    width: 120,
    height: 120,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#007bff',
  },
  popularItemsContainer: {
    paddingRight: 15,
  },
  popularItemCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  popularItemImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  popularItemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;