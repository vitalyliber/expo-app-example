import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./RootNavigator";
import { StatusBar } from "expo-status-bar";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  );
}
