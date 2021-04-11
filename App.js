import React, { Component } from "react";
import { View, Text } from "react-native";
import Routes from "./src/Navigation/Routes";
import { getUserData } from "./src/utils/utils";
import store from "./src/redux/store";
import types from "./src/redux/types";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import SplashScreen from "react-native-splash-screen";
import { getFCMToken } from  "./src/utils/pushNotification" ; 
const { dispatch } = store;

class MyClass extends Component {
  componentDidMount() {
    getFCMToken() ;
    getUserData().then((userData) => {
      if (userData) {
        dispatch({
          type: types.ISLOGIN,
          payload: userData,
        });
        SplashScreen.hide();
      }
      SplashScreen.hide();
    });
  }


  render() {
    return (
      <Provider store={store}>
        <Routes />
        <FlashMessage position="top" />
      </Provider>
    );
  }
}

export default MyClass;
