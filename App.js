import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    status: 'done', 
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    status: 'pending',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description:
      'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.Vui lòng thêm khách hàng',
    time: '20/08/2020, 06:00',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn hôm nay',
    time: '20/08/2020, 06:00',
    status: 'done',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description:
      'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc',
    time: '20/08/2020, 06:00',
    status: 'done',
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      
      <View style={styles.iconContainer}>
        <Icon
          name={item.status === 'done' ? 'check-circle' : 'person'}
          size={24}
          color={item.status === 'done' ? 'green' : 'blue'}
        />
      </View>

      {/* Nội dung thông báo */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      {/* Danh sách thông báo */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999999',
  },
});

export default NotificationScreen;