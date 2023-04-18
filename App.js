import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackScreen } from './src/screens/event-list/MainStackScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen';

const EventListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <EventListStack.Navigator screenOptions={{ headerShown: false }}>
          {/* Pantallas con tab */}
          <EventListStack.Screen name="Main" component={MainStackScreen} />
          {/* Pantallas con sin tab */}
          <EventListStack.Screen name="EventDetail" component={EventDetailScreen} />
        </EventListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );

}
