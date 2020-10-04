import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "../components/ItemCard";
import { TODOS } from "../utils/data";

export default function AllScreen() {
    const [data, setData] = useState(TODOS);
    const [content, setContent] = useState("");

    const onToggleTodo = (id) => {
        const todo = data.find((todo) => todo.id === id);
        todo.status = todo.status === "Done" ? "Active" : "Done";
        const index = data.findIndex((todo) => todo.id === id);
        data[index] = todo;
        const newTodoList = [...data];
        setData(newTodoList);
    };

    const onDeleteTodo = (id) => {
        const newData = data.filter((item) => item.id != id);
        setData(newData);
    };

    const onDelete = (item) => {
        const prompt = `"${item.body}"`;
        Alert.alert(
            "Delete your todo?",
            prompt,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => onDeleteTodo(item.id) },
            ],
            { cancelable: true }
        );
    };

    const onSubmitTodo = () => {
        const newTodo = {
            id: length + 1,
            status: "Active",
            body: content,
        };
        const newTodoList = [newTodo, ...data];
        setData(newTodoList);
        setContent("");
    };

    const length = data.length;
    const renderItem = ({ item }) => {
        const status = item.status;
        return (
            <ItemCard
                iconName={status === "Done" ? null : "ios-radio-button-off"}
                color={status === "Done" ? "#4F74FF" : "#D103FC"}
                content={item.body}
                onPress={() => onToggleTodo(item.id)}
                onDelete={() => onDelete(item)}
                textDecoration={status === "Done" ? "line-through" : "none"}
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
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter to-do-list"
                    onChangeText={(text) => setContent(text)}
                    value={content}
                />
                <Ionicons
                    name="ios-add-circle"
                    size={35}
                    color={"#3D47AF"}
                    onPress={onSubmitTodo}
                />
            </View>
            <Text style={styles.header}>TODAY'S TASKS</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `id: ${index}`}
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
        elevation: 3,
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
