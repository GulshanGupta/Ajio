import React, { Fragment } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Signup,
  LandingPage,
  MainPage,
  OtpVerification,
  OtpConfirmation,
  LoginMedi,
} from "../Screen";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import Details from "../Screen/Details/Details";
import Confirmedorder from "../Screen/Confirmedorder/Confirmedorder";

const Stack = createStackNavigator();

function AuthStack() {
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
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.OTP_CONFIRMATION}
        component={OtpConfirmation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN_MEDI}
        component={LoginMedi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={Signup}
      />

      {/* <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      /> */}

      
    </Fragment>
  );
}

export default AuthStack;
