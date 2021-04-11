import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import imagePath from "../constants/imagePath";

export default function Header(props) {
  const { bgcolor, headingText, _onPress } = props;
  const styles = getStyles(bgcolor);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={_onPress}>
          <Image source={imagePath.menu} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>

      <View style={styles.headertextContainer}>
        <Text style={styles.headerheadingStyle}>{headingText}</Text>
      </View>
    </View>
  );
}

const getStyles = (bgcolor) => {
  return StyleSheet.create({
    headerContainer: {
      minHeight: 50,
      backgroundColor: bgcolor,
      flexDirection: "row",
      alignItems: "center",
    },
    menuContainer: { flex: 0.2 },
    imageStyle: {
      width: 30,
      height: 30,
      tintColor: "white",
      alignSelf: "center",
    },
    headertextContainer: { flex: 0.7 },
    headerheadingStyle: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
};
