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

const Mymodal = (props) => {
  const {
    modalVisible,
    setModalVisible,
    onchangetext,
    navigation,
    onClick 
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
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Image
                source={require("../assets/images/medibuddyLogo.png")}
                style={{ resizeMode: "contain", width: 100, height: 30 }}
              />
            </View>

            <View style={{ marginVertical: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{ color: "#000036", fontSize: 20, fontWeight: "bold" }}
                >
                  {strings.INDIAN_CODE}
                </Text>

                <TextInput
                  style={{
                    color: "#ababab",
                    fontSize: 15,
                    marginHorizontal: 10,
                  }}
                  placeholder={strings.ENTER_MOBILE_NO}
                  onChangeText={onchangetext("phoneNumber")}
                ></TextInput>
              </View>

              <View
                style={{
                  height: 2,
                  width: 250,
                  marginHorizontal: 10,
                  backgroundColor: "#4b83e9",
                }}
              ></View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  onClick()
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Get OTP</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color="white" size={25} />

              {/* <Image
                source={{
                  uri:
                    'https://www.pinclipart.com/picdir/middle/321-3216063_rightarrow-key-rightkey-direction-supervision-order-right-arrow.png',
                }}
                style={{width: 10, height: 10, tintColor: 'white'}}
              /> */}
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
});

export default Mymodal;
