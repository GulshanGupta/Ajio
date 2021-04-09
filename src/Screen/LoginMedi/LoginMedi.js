import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import WrapperContainer from "../../Component/WrapperContainer";
import AntDesign from "react-native-vector-icons/AntDesign";
import navigationStrings from "../../constants/navigationStrings";
import strings from "../../constants/lang/en";
import apis from "../../redux/actions";
import validator from "../../utils/validations";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default class LoginMedi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  isValidData = () => {
    const { name, email, password } = this.state;
    const error = validator({
      firstName: name,
      email: email,
      password: password,
    });
    if (error) {
      showMessage({
        type: "danger",
        icon: "danger",
        message: error,
      });

      return false;
    }

    apis
      .signup({
        name: name,
        email: email,
        languageCode: "EN",
        signupType: "APP",
      })
      .then((res) => {
        console.log(res);
        this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getInputValue(key) {
    return (value) =>
      this.setState({
        [key]: value,
      });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <WrapperContainer>
        <View style={{ flex: 1, backgroundColor: "#4c8cf8", padding: 30 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 15,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black" }}>
                Enter Your Information
              </Text>
            </View>

            <TextInput
              style={{
                color: "#ababab",
                fontSize: 15,
                marginHorizontal: 10,
              }}
              placeholder={strings.YOUR_NAME}
              onChangeText={this.getInputValue("name")}
            ></TextInput>

            <TextInput
              style={{
                color: "#ababab",
                fontSize: 15,
                marginHorizontal: 10,
              }}
              placeholder={strings.YOUR_EMAIL}
              onChangeText={this.getInputValue("email")}
            ></TextInput>

            <TextInput
              style={{
                color: "#ababab",
                fontSize: 15,
                marginHorizontal: 10,
              }}
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={this.getInputValue("password")}
            ></TextInput>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={this.isValidData}
              >
                <Text style={styles.textStyle}>Verify</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color="white" size={25} />
            </View>
          </View>
        </View>
        <FlashMessage position="top" />
      </WrapperContainer>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    minHeight: "90%",
    minWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
});
