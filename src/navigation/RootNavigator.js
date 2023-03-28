import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
