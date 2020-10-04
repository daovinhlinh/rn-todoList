import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ItemCard(props, { navigation }) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            onLongPress={props.onLongPress}
        >
            <View style={styles.container}>
                <Ionicons
                    name={
                        props.iconName ? props.iconName : "ios-checkmark-circle"
                    }
                    size={35}
                    color={props.color}
                />
                <Text
                    style={[
                        styles.content,
                        { textDecorationLine: props.textDecoration },
                    ]}
                >
                    {props.content}
                </Text>
                <TouchableOpacity onPress={props.onDelete}>
                    <Ionicons name="md-trash" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
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
        elevation: 3,
        justifyContent: "space-between",
    },
    content: {
        color: "white",
        marginHorizontal: 15,
        width: width * 0.5,
    },
});
