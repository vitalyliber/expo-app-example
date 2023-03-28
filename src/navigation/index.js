import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import RootNavigator from "./RootNavigator";
import { StatusBar } from "expo-status-bar";
import TabNavigator from "./TabNavigator";
import { useStore } from "@nanostores/react";
import { user } from "../store/user";
import useSplashScreenHook from "./useSplashScreenHook";

export default function Navigation() {
  const { onLayoutRootView, appIsReady } = useSplashScreenHook();
  const { authorized } = useStore(user);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View onLayout={onLayoutRootView} />
      <StatusBar style="auto" />
      {authorized ? <TabNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
}
