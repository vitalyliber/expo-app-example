import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./RootNavigator";
import { StatusBar } from "expo-status-bar";
import TabNavigator from "./TabNavigator";
import { useStore } from "@nanostores/react";
import { user } from "../store/user";

export default function Navigation() {
  const { authorized } = useStore(user);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {authorized ? <TabNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
}
