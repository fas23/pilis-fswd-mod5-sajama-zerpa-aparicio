import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventListStackScreen } from './src/screens/event-list/EventListStackScreen';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { COLORS, SPACING } from './src/utils/theme';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Inicio: 'home',
  Explorar: 'search',
  Perfil: 'person'
}


const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar

  }
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name='Inicio' component={HomeScreen} />
          <Tab.Screen name='Explorar' component={EventListStackScreen} />
          <Tab.Screen name='Perfil' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );

}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
