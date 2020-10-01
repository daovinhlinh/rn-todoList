import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "../components/ItemCard";
export default function ActiveScreen() {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Enter to-do-list"
                />
                <Ionicons
                    name="ios-add-circle"
                    size={45}
                    color={"#EB06FF"}
                    onPress={() => alert("Hello")}
                />
            </View>
            <ItemCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#3450A1",
    },
    input: {
        textAlign: "center",
        width: 300,
        height: 50,
        backgroundColor: "#d7d7d7",
        borderRadius: 13,
        marginRight: 10,
    },
});
