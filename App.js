import React from "react";
import {View, Text, FlatList, SectionList, TouchableOpacity, Alert, StyleSheet, ScrollView} from "react-native";

const App = () => {
    // Danh sách sản phẩm cho FlatList
    const products = [
        {id: "1", name: "Product A", price: "10.00"},
        {id: "2", name: "Product B", price: "15.00"},
        {id: "3", name: "Product C", price: "20.00"},
    ];

    // Danh sách nhóm sản phẩm cho SectionList
    const groupedProducts = [
        {title: "Category A", data: ["Product A1", "Product A2", "Product A3"]},
        {title: "Category B", data: ["Product B1", "Product B2"]},
        {title: "Category C", data: ["Product C1", "Product C2", "Product C3"]},
    ];

    // Hàm xử lý khi bấm vào sản phẩm
    const handlePress = (productName) => {
        Alert.alert("Thông tin sản phẩm", `Bạn đã chọn: ${productName}`);
    };

    // Hàm render từng sản phẩm cho FlatList
    const renderFlatListItem = ({item}) => (
        <TouchableOpacity onPress={() => handlePress(item.name)} style={styles.flatListItem}>
            <Text style={styles.flatListItemName}>{item.name}</Text>
            <Text style={styles.flatListItemPrice}>${item.price}</Text>
        </TouchableOpacity>
    );

    // Hàm render từng sản phẩm cho SectionList
    const renderSectionListItem = ({item}) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.sectionListItem}>
            <Text style={styles.sectionListItemText}>{item}</Text>
        </TouchableOpacity>
    );

    // Hàm render tiêu đề của từng nhóm trong SectionList
    const renderSectionHeader = ({section: {title}}) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* FlatList */}
            <Text style={styles.title}>Danh sách sản phẩm (FlatList)</Text>
            <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderFlatListItem} contentContainerStyle={styles.flatList} />

            {/* SectionList */}
            <Text style={styles.title}>Danh sách nhóm sản phẩm (SectionList)</Text>
            <SectionList sections={groupedProducts} keyExtractor={(item, index) => item + index} renderItem={renderSectionListItem} renderSectionHeader={renderSectionHeader} contentContainerStyle={styles.sectionList} />
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
        padding: 40,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
        color: "#333",
    },
    flatList: {
        marginBottom: 20,
    },
    flatListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 15,
marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    flatListItemName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    flatListItemPrice: {
        fontSize: 16,
        color: "#888",
    },
    sectionList: {
        paddingBottom: 10,
    },
    sectionHeader: {
        backgroundColor: "#4a90e2",
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    sectionListItem: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    sectionListItemText: {
        fontSize: 16,
        color: "#4a4a4a",
    },
});

export default App;