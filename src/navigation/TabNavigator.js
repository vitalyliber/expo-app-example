// Docs: https://reactnavigation.org/docs/hiding-tabbar-in-screens/
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeScreen, SettingsScreen, DetailsScreen } from "../screens";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: () => false,
          tabBarActiveTintColor: "fuchsia",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
        name="HomeTab"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={25} />
          ),
        }}
        name="SettingsTab"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
