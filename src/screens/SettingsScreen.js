import { View, Text, StyleSheet } from "react-native";
import { logoutUser } from "../store/user";
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Text style={styles.logout} onPress={logoutUser}>
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
  logout: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
  },
});
