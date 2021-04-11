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
import actions from "../../redux/actions";
import validator from "../../utils/validations";
import colors from "../../styles/colors";
import styles from "./styles";

export default class OtpConfirmation extends Component {
  onButtonPress = () => {
    const { data } = this.props.route.params;

    let dataSend = {
      userId: data,
      otp: strings.OTP_NO,
      deviceToken: strings.DEVICE_TOKEN,
      registerFrom: strings.ANDROID,
    };

    actions
      .onVerifyOTP(dataSend)
      .then((response) => {
        console.log(response);
        showMessage({
          type: "success",
          icon: "success",
          message: strings.OTP_VERIFIED,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <WrapperContainer>
        <View style={styles.blueBackground}>
          <View style={styles.whiteBackground}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>
                {strings.ENTER_4_DIGIT_OTP}
              </Text>
            </View>

            <View style={styles.flexRow}>
              <View style={styles.textinputView}>
                <TextInput
                  style={styles.textinput}
                  placeholder={strings.OTP}
                ></TextInput>
              </View>
            </View>

            <View style={styles.buttonStyle}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={this.onButtonPress}
              >
                <Text style={styles.textStyle}>{strings.VERIFY}</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color={colors.white} size={25} />
            </View>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}

