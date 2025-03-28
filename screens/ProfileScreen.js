import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Switch} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const menuItems = [
        {icon: "home-outline", text: "Home"},
        {icon: "card-outline", text: "My Card"},
        {icon: "moon-outline", text: "Dark Mode"},
        {icon: "time-outline", text: "Track Your Order"},
        {icon: "settings-outline", text: "Settings"},
        {icon: "help-circle-outline", text: "Help Center"},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={require("../assets/profile.png")} style={styles.profileImage} />
                <Text style={styles.profileName}>Rakibul Hasan</Text>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => {
                            if (item.text === "Dark Mode") {
                                setIsDarkMode(!isDarkMode);
                            }
                        }}
                    >
                        <View style={styles.menuItemLeft}>
                            <Icon name={item.icon} size={24} color="#000" />
                            <Text style={styles.menuItemText}>{item.text}</Text>
                        </View>
                        {item.text === "Dark Mode" && <Switch value={isDarkMode} onValueChange={setIsDarkMode} />}
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
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
    profileHeader: {
        alignItems: "center",
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    menuContainer: {
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f2f3",
    },
    menuItemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuItemText: {
        marginLeft: 15,
        fontSize: 16,
    },
    logoutButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProfileScreen;
