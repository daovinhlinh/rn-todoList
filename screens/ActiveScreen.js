import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FlatList, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "../components/ItemCard";
import { data } from "../ultis/data";

export default function ActiveScreen() {
    const renderItem = ({ item }) => {
        const status = item.status === "Done" ? true : false;
        return (
            <ItemCard
                iconName={status ? null : "ios-radio-button-off"}
                color={status ? "#4F74FF" : "#D103FC"}
                content={item.body}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "white",
                    fontSize: 50,
                    width: "80%",
                    textAlign: "left",
                    marginBottom: 10,
                }}
            >
                Hello, Linh!
            </Text>
            <Text style={styles.header}>WHAT ARE YOU GOING TO DO?</Text>
            <View style={[styles.inputWrapper, styles.shadow]}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter to-do-list"
                />
                <Ionicons
                    name="ios-add-circle"
                    size={35}
                    color={"#3D47AF"}
                    onPress={() => console.log(data)}
                />
            </View>
            <Text style={styles.header}>TODAY'S TASKS</Text>

            {/*Circle color : #4F74FF #D103FC*/}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#3D47AF",
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "#0A155A",
        borderRadius: 25,
        paddingHorizontal: 15,
    },
    shadow: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "gray",
        shadowOpacity: 1,
        elevation: 8,
    },
    input: {
        width: "70%",
        height: 50,
        backgroundColor: "transparent",
        marginRight: 10,
        color: "white",
    },
    header: {
        color: "#7a8af0",
        marginTop: 30,
        marginBottom: 8,
        width: "80%",
        textAlign: "left",
    },
});
