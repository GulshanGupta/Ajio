import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function (props) {
  const { placeholder } = props ;
  return (
    <View style={styles.textInput}>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
    margin:15
  },
  inputField: {
    backgroundColor: "#f0f4f7",
    padding: 15,
    width: 250,
    borderRadius: 8,
  }
});
