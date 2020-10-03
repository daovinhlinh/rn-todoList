import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CompleteScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
