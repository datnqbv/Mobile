import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Shopping Cart</Text>
                <TouchableOpacity>
                    <Icon name="trash-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.cartItemContainer}>
                <Image source={require("../assets/burger.png")} style={styles.cartItemImage} resizeMode="contain" />
                <View style={styles.cartItemDetails}>
                    <Text style={styles.cartItemName}>BURGER</Text>
                    <Text style={styles.cartItemPrice}>$28</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Address</Text>
                <Text>Dhaka, Bangladesh</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.paymentHeader}>
                    <Text style={styles.sectionTitle}>Payment Method</Text>
                    <TouchableOpacity>
                        <Text style={styles.changeText}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text>Subtotal</Text>
                    <Text>$86</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text>Delivery Fee</Text>
                    <Text>$15.20</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalText}>$102</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirm Order</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    cartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#f1f2f3",
        padding: 10,
        borderRadius: 10,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cartItemPrice: {
        fontSize: 14,
        color: "#007bff",
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    paymentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    changeText: {
        color: "#007bff",
    },
    summaryContainer: {
        backgroundColor: "#f1f2f3",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    totalText: {
        fontWeight: "bold",
    },
    confirmButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    confirmButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CartScreen;
