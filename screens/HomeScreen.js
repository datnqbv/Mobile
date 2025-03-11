import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      {/* Insights */}
      <View style={styles.insights}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="scan-outline" size={24} color="#4CAF50" />
          <Text style={styles.cardText}>Scan new</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="alert-circle-outline" size={24} color="#FF9800" />
          <Text style={styles.cardText}>Counterfeits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#2196F3" />
          <Text style={styles.cardText}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#9C27B0" />
          <Text style={styles.cardText}>Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 18, color: '#333' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  insights: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 },
  card: { width: '48%', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  cardText: { marginTop: 5, fontSize: 14, fontWeight: '500' },
});
