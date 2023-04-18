import React from "react";
import { EventListScreen } from "./EventListScreen";
import { EventDetailScreen } from "../event-detail/EventDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//navegación dentro de las pestañas
const EventListStack = createNativeStackNavigator();

export const EventListStackScreen = () => {
  return (
    <EventListStack.Navigator screenOptions={{ headerShown: false }}>
      <EventListStack.Screen name="ExplorarLista" component={EventListScreen} />
      <EventListStack.Screen name="Detalle" component={EventDetailScreen} />
    </EventListStack.Navigator>
  );
};
