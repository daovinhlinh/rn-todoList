import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ActiveScreen({ navigation, route }) {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}
