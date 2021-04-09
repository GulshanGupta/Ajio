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
  const { onPress, text } = props;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity onPress={() => onPress()} style={styles.buttonStyle}>
        <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#202020",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",

  },
});
