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
  const { onPress } = props;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={styles.buttonStyle}
      >
        <Text style={{ color: "#e3e3e3" , fontWeight:'bold' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
    margin:15
  },
  buttonStyle: {
    backgroundColor: "#202020",
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection:'row' , 
    justifyContent:'center'

  }
});
