import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CompleteScreen from "./screens/CompleteScreen";
import ActiveScreen from "./screens/ActiveScreen";
import AllScreen from "./screens/AllScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Active"
                tabBarOptions={{
                    activeTintColor: "black",
                }}
            >
                <Tab.Screen
                    name="Complete"
                    component={CompleteScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            var iconName;
                            iconName = focused
                                ? "ios-checkmark-circle"
                                : "ios-checkmark";
                            return (
                                <Ionicons
                                    name={iconName}
                                    color={color}
                                    size={24}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Active"
                    component={ActiveScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            var iconName;
                            iconName = focused ? "ios-list-box" : "ios-list";
                            return (
                                <Ionicons
                                    name={iconName}
                                    color={color}
                                    size={24}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="All"
                    component={AllScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            var iconName;
                            iconName = focused ? "ios-add-circle" : "ios-add";
                            return (
                                <Ionicons
                                    name={iconName}
                                    color={color}
                                    size={24}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
