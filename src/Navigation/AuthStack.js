import React, { Fragment } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LandingPage,
  MainPage,
  OtpVerification,
  OtpConfirmation,
} from "../Screen";
import navigationStrings from "../constants/navigationStrings";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Fragment>
      <Stack.Screen
        name={navigationStrings.LANDING_PAGE}
        component={LandingPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.OTP_CONFIRMATION}
        component={OtpConfirmation}
        options={{ headerShown: false }}
      />
    </Fragment>
  );
}

export default AuthStack;
