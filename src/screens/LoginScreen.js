import { View, Text, StyleSheet } from "react-native";
import { authUser } from "../store/user";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text style={styles.login} onPress={authUser}>
        Login
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
  login: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
  },
});
