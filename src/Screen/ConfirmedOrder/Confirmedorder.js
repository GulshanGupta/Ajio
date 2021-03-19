import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Platform,
  Share,
  StyleSheet,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default class Confirmedorder extends Component {
  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${7417391997}";
    } else {
      phoneNumber = "telprompt:${7417391997}";
    }

    Linking.openURL(phoneNumber);
  };

  openMail = () => {
    let mailText = "";

    if (Platform.OS === "android") {
      mailText =
        "mailto:hr@code-brew.com?subject=Order Confirmed&body=Hello, your order is confirmed ! ";
    } else {
      mailText =
        "mailtoprompt:hr@code-brew.com?subject=Order Confirmed&body=Hello, your order is confirmed !";
    }

    Linking.openURL(mailText);
  };

  openSms = () => {
    let smsText = "";

    if (Platform.OS === "android") {
      smsText = "sms:${7417391997}?body=yourMessage";
    } else {
      smsText = "smsprompt:${7417391997}?body=yourMessage";
    }

    Linking.openURL(smsText);
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: "Hurray , your order has been confirmed !",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  subtotalPrice = () => {
    const { data } = this.props.route.params;
    if (data) {
      return data.reduce(
        (sum, item) => sum + item.quantity * item.reducedPrice,
        0
      );
    }
    return 0;
  };

  render() {
    const { data } = this.props.route.params;
    console.log(data);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            minHeight: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={{ marginRight: 100, fontWeight: "bold" }}>
            Order Confirmed
          </Text>

          <AntDesign name="hearto" size={25} />
        </View>

        <View style={{ flex: 1, backgroundColor: "#e9e9e9" }}>
          <View style={{ minHeight: 105 , backgroundColor: "#34b194" }}>
            
            <View
              style={{
                
                padding: 15,
                paddingLeft: 20,
              }}
            >
              <Text style={{ color: "#f7fcfa", fontSize: 30 }}>Receipt</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.5,
                  padding: 5,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#e3f4f0" }}>Mar 9 , 2021</Text>
              </View>
              <View
                style={{ flex: 0.5 ,  padding: 5 }}
              >
                <Text style={{ color: "#e3f4f0" }}>Order Id: 123435445</Text>
              </View>
            </View>
          </View>

          {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
                  
            <TouchableOpacity onPress={this.onShare} activeOpacity={0.7}>
              <FontAwesome
                style={{ marginVertical: 5 }}
                name="share-square-o"
                size={30}
                color="blue"
              />
            </TouchableOpacity>
          </View> */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
              Need Any help ? Call , Message or Mail us your query !{" "}
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7}>
              <Feather
                style={{ marginVertical: 5 }}
                name="phone-call"
                size={30}
                color="#F4B400"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.openMail} activeOpacity={0.7}>
              <Feather
                style={{ marginVertical: 5 }}
                name="mail"
                size={30}
                color="#DB4437"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.openSms} activeOpacity={0.7}>
              <MaterialCommunityIcons
                style={{ marginVertical: 5 }}
                name="message-reply-text"
                size={30}
                color="#4285F4"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              TRACK YOUR ORDER LIVE !
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <MapView
              style={{ width: 350, height: 350 }}
              initialRegion={{
                latitude: 30.719301,
                longitude: 76.810627,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 30.719301, longitude: 76.810627 }}
                title={"Code Brew Labs"}
                description={"Sector 28B, Chandigarh, 160019"}
              />
            </MapView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
