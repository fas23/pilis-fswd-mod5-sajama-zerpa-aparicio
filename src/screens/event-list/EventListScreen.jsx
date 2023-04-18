import React from "react";
import { useEffect, useState } from "react";
import { getEventList } from "../../api/event.service";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./EventListScreen.styles";

export const EventListScreen = ({ navigation }) => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getEventList().then((data) => {
      setEventList(data);
    });
  }, []);

  const events = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("EventDetail", { item })}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: `https://drive.google.com/uc?id=${item.imagen}` }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{item.nombre}</Text>
        <Text style={styles.itemTitle}>{item.descripcion}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={eventList}
        renderItem={events}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
