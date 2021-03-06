import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { showMessage, errorMessage } from "react-native-flash-message";
import WrapperContainer from "../../Component/WrapperContainer";
import FormModal from "../../Component/FormModal";
import actions from "../../redux/actions";
import validator from "../../utils/validations";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import strings from "../../constants/lang";

export default class OtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true,
      phoneNumber: "",
    };
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  changeTextInput(key) {
    return (value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  isValidlogin = () => {
    const { phoneNumber } = this.state;

    const error = validator({ phoneNumber: phoneNumber });
    if (error) {
      showMessage({
        type: "danger",
        icon: "danger",
        message: error,
      });
      return false;
    }

    let dataSend = {
      contactDetails: {
        countryCode: strings.INDIAN_CODE,
        countryCodeISO: strings.IN,
        phoneNo: phoneNumber,
      },
    };

    actions
      .onSendOTP(dataSend)
      .then((response) => {
        console.log(response);

        this.props.navigation.navigate(navigationStrings.OTP_CONFIRMATION, {
          data: response.data.userId,
        });
        showMessage({
          type: "success",
          icon: "success",
          message: strings.OTP_SENT,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <WrapperContainer>
        <View style={styles.mainView}>
          <View style={styles.forModalView}></View>

          <FormModal
            navigation={this.props.navigation}
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
            onchangetext={(key) => this.changeTextInput(key)}
            onClick={this.isValidlogin}
          />
        </View>
      </WrapperContainer>
    );
  }
}
