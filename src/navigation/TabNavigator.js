import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
