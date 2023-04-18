import React from "react";
import { StyleSheet } from "react-native";
import { EventListScreen } from "./EventListScreen";
import { ProfileScreen } from "../profile/ProfileScreen";
import { HomeScreen } from "../home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from "../../utils/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Search: "search",
  Profile: "person",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar,
  };
};

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        options={{ title: "Inicio" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        options={{ title: "Explorar" }}
        component={EventListScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ title: "Perfil" }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
  },
});
