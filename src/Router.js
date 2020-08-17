import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WheelScreen from "./Screens/WheelScreen";
import PositionsScreen from "./Screens/PositionsScreen";
import PositionScreen from "./Screens/PositionScreen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"PositionsScreen"}>
        <Stack.Screen
          name="PositionsScreen"
          component={PositionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WheelScreen"
          component={WheelScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PositionScreen"
          component={PositionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
