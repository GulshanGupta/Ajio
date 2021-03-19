import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class LatestDeals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View></View>

        <View>
          <Image
            source={{ }}
            style={{
              width: 180,
              height: 180,
              resizeMode: "contain",
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 8,
              marginBottom: 5,
            }}
          />
        </View>
      </View>
    );
  }
}
