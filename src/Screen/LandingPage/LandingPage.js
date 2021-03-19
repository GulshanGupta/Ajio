import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar animated={true} backgroundColor="black" hidden={false} />
        <View style={styles.landingScreen}>
          <View style={styles.forFlex}>
            <Image
              style={styles.dpLogo}
              source={{
                uri:
                  "data:image/png;base64,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",
              }}
            />
          </View>

          <View style={styles.logo}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Text style={{ color: "white" , fontWeight:'bold' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
            >
              <Text style={{ color: "white" , fontWeight:'bold' }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  landingScreen: {
    flex: 1,
    backgroundColor: "black",
  },
  forFlex: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dpLogo: {
    width: 250,
    height: 250,
  },
  logo: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
