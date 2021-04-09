import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { Details, Confirmedorder, Chat } from "../Screen/index";
import DrawerRoutes from "./DrawerRoutes";

const Stack = createStackNavigator();
export default function () {
  return (
    <>
      <Stack.Screen
        name="Drawerroutes"
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Stack.Screen
        name="Chat"
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
        name="Details"
        options={{
          headerShown: false,
        }}
        component={Details}
      />

      <Stack.Screen
        name={navigationStrings.CONFIRMED_ORDER}
        options={{
          headerShown: false,
        }}
        component={Confirmedorder}
      /> */}
    </>
  );
}
