import { View, Text, StyleSheet } from "react-native";
import { authUser } from "../store/user";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Text onPress={authUser}>Open Tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
