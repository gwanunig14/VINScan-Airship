import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationStrings } from "./assets/strings";
import { CarScreen } from "./viewModels/CarScreen";
import { ScanScreen } from "./viewModels/ScanScreen";
import { StartScreen } from "./viewModels/StartScreen";
import { StoryScreen } from "./viewModels/StoryScreen";
import { VinScreen } from "./viewModels/VinScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationStrings.START} component={StartScreen} />
        <Stack.Screen name={NavigationStrings.SCANNER} component={ScanScreen} />
        <Stack.Screen name={NavigationStrings.VIN} component={VinScreen} />
        <Stack.Screen name={NavigationStrings.CAR} component={CarScreen} />
        <Stack.Screen name={NavigationStrings.STORY} component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
