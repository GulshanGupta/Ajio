import React, { Fragment } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, LandingPage, MainPage } from "../Screen";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import Details from "../Screen/Details/Details";
import Confirmedorder from "../Screen/ConfirmedOrder/Confirmedorder";

const Stack = createStackNavigator();

function AuthStack(Stack) {
  return (
    <Fragment>
      <Stack.Screen
        component={LandingPage}
        options={{
          headerShown: false,
        }}
        name={navigationStrings.LANDING_PAGE}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        options={{
          headerShown: false,
        }}
        component={Login}
      />

      <Stack.Screen
        name={navigationStrings.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={Signup}
      />

      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      />

      <Stack.Screen
        name={navigationStrings.CONFIRMED_ORDER}
        options={{
          headerShown: false,
        }}
        component={Confirmedorder}
      />

      <Stack.Screen
        name="Details"
        options={{
          headerShown: false,
        }}
        component={Details}
      />
    </Fragment>
  );
}

export default AuthStack;
