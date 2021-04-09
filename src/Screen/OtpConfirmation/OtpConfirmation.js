import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import WrapperContainer from "../../Component/WrapperContainer";
import { showMessage, errorMessage } from "react-native-flash-message";
import AntDesign from "react-native-vector-icons/AntDesign";
import navigationStrings from "../../constants/navigationStrings";
import { TextInput } from "react-native-gesture-handler";
import strings from "../../constants/lang/en";
import TabRoutes from "../../Navigation/TabRoutes";
import actions from "../../redux/actions" ;
import validator from "../../utils/validations" ;

export default class OtpConfirmation extends Component {

  onButtonPress = () => {



    const { data } = this.props.route.params;

    let dataSend = {
      userId: data,
      otp: "12345",
      deviceToken: "123",
      registerFrom: "ANDROID"
    }



    actions.onVerifyOTP(dataSend)
      .then(response => {
        console.log(response);
        showMessage({
          type: "success",
          icon: "success",
          message: "OTP verified successfully"
        })

      }).catch(error => {
        console.log(error)

      });



  };


  render() {
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
                Enter 4 digit OTP
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <TextInput
                  style={{
                    color: "#ababab",
                    fontSize: 15,
                    marginHorizontal: 10,
                  }}
                  placeholder={strings.OTP}
                ></TextInput>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={ this.onButtonPress }
              >
                <Text style={styles.textStyle}>Verify</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color="white" size={25} />
            </View>
          </View>
        </View>
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
