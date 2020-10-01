import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ItemList from "../components/ItemList";

const Stack = createStackNavigator();

export default function AllScreen() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}
