import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}
