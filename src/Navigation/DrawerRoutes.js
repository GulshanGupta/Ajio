import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Messenger } from '../Screen';
import navigationStrings from '../constants/navigationStrings';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      {/* <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Chart"
        component={Chart}
        options={{drawerLabel: 'Chart'}}
      />
      <Drawer.Screen
        name="Zoomin"
        component={Zoomin}
        options={{drawerLabel: 'Zoomin'}}
      />
      <Drawer.Screen
        name="Qrcode"
        component={Qrcode}
        options={{drawerLabel: 'Qr Code'}}
      /> */}

      <Drawer.Screen
        name={navigationStrings.MESSENGER}
        component={Messenger}
        options={{drawerLabel: 'Messenger'}}
      />
    </Drawer.Navigator>
  );
}
