import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { Details, Confirmedorder, Chat } from "../Screen/index";
import DrawerRoutes from "./DrawerRoutes";

const Stack = createStackNavigator();
export default function () {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Stack.Screen
        name={navigationStrings.CHAT}
        options={{
          headerShown: false,
        }}
        component={Chat}
      />
      {/* <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        options={{
          headerShown: false,
        }}
        component={TabRoutes}
      />

      <Stack.Screen
        name={navigationStrings.DETAILS}
        options={{
          headerShown: false,
        }}
        component={Details}
      /> */}
      
    </>
  );
}
