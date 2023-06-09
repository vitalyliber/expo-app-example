import { View, Text, StyleSheet } from "react-native";
import { logoutUser } from "../store/user";
export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Text style={styles.button} onPress={() => navigation.push("Details")}>
        Details
      </Text>
      <Text style={styles.button} onPress={logoutUser}>
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
  },
});
