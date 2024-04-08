import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./List";
import ex from "./searchPage";
import tt from "./tutorialView";
import TVP1 from "./Tutorial/TutorialViewPg1";
import TVP2 from "./Tutorial/TutorialViewPg2";
import TVP3 from "./Tutorial/TutorialViewPg3";
import TVP4 from "./Tutorial/TutorialViewPg4";
import TVP5 from "./Tutorial/TutorialViewPg5";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tr">
        <Stack.Screen
          name="TVP1"
          component={TVP2}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TVP2"
          component={TVP1}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TVP3"
          component={TVP3}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TVP4"
          component={TVP4}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TVP5"
          component={TVP5}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
