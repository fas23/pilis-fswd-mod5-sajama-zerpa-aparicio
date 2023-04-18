import React, { useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./UserInfoScreen.styles";
import { UserContext } from "../contexts/UserContext";

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Info User</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Salir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
