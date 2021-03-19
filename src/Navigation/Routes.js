import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();
Stack.Screen;

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>{AuthStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}
