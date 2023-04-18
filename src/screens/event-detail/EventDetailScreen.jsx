import React, { useContext } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "./EventDetailScreen.styles";
import MapView, { Marker } from "react-native-maps";
import { Link } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

export const EventDetailScreen = ({ route }) => {
  //console.warn(route.params);
  const { item } = route.params;
  const { currentUser } = useContext(UserContext);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{ uri: `https://drive.google.com/uc?id=${item.imagen}` }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
        <Text style={styles.price}>{item.precio_entrada}</Text>
        {currentUser && (
          <Link
            style={styles.webButton}
            to={{
              screen: "EventDetailWeb",
              params: { url: "https://example.com" },
            }}
          >
            Reservar
          </Link>
        )}
        <Text style={styles.description}>{item.organizador}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.coordenadas.latitud,
          longitude: item.coordenadas.longitud,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.coordenadas.latitud,
            longitude: item.coordenadas.longitud,
          }}
          title={item.nombre}
        />
      </MapView>
    </ScrollView>
  );
};
