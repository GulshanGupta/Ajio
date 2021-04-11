import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import strings from "../constants/lang";
import AntDesign from "react-native-vector-icons/AntDesign";
import navigationStrings from "../constants/navigationStrings";
import { OtpConfirmation } from "../Screen";
import imagePath from "../constants/imagePath";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../styles/colors";

const FormModal = (props) => {
  const {
    modalVisible,
    setModalVisible,
    onchangetext,
    navigation,
    onClick,
  } = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.logoContainer}>
              <Image source={imagePath.medi_buddy} style={styles.logo} />
            </View>

            <View style={styles.marginvFifty}>
              <View style={styles.textinputContainer}>
                <Text style={styles.indianCode}>{strings.INDIAN_CODE}</Text>

                <TextInput
                  style={styles.textinput}
                  placeholder={strings.ENTER_MOBILE_NO}
                  onChangeText={onchangetext("phoneNumber")}
                ></TextInput>
              </View>

              <View style={styles.line}></View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  onClick();
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>{strings.GET_OTP}</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color={colors.white} size={25} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  logoContainer: { flexDirection: "row", justifyContent: "flex-end" },
  logo: { resizeMode: "contain", width: 100, height: 30 },
  marginvFifty: { marginVertical: 50 },
  textinputContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  indianCode: { color: "#000036", fontSize: 20, fontWeight: "bold" },
  textinput: {
    color: "#ababab",
    fontSize: 15,
    marginHorizontal: 10,
  },
  line: {
    height: 2,
    width: 250,
    marginHorizontal: 10,
    backgroundColor: "#4b83e9",
  },
  buttonContainer: { flexDirection: "row", justifyContent: "flex-end" },
});

export default FormModal;
