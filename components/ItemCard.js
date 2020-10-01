import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ItemCard(props) {
    return (
        <View style={styles.container}>
            <Ionicons
                name={props.iconName ? props.iconName : "ios-checkmark-circle"}
                size={35}
                color={props.color}
            />
            <Text style={styles.content}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0A155A",
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: width * 0.8,
        borderRadius: 17,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        elevation: 8,
    },
    content: {
        color: "white",
        marginHorizontal: 15,
    },
});
