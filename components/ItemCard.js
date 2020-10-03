import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    swipeablefl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LeftAction = () => {
    return (
        <View>
            <Text>Add to cart</Text>
        </View>
    );
};
export default function ItemCard(props) {
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
    },
    content: {
        color: "white",
        marginHorizontal: 15,
    },
});
