import { View, Text, StyleSheet } from "react-native";
export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Text onPress={() => navigation.replace("Home")}>Open Tabs</Text>
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
