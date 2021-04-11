import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { connect } from "react-redux";

const Stack = createStackNavigator();

function Routes(props) {
  const { isLoggedin, data } = props;

  console.log(data, "THIS IS ACCESS TOKEN IN ROUTES");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!data.accessToken ? <>{MainStack()}</> : <>{AuthStack()}</>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.isLoggedin,
    data: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Routes);
