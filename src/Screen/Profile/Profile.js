import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Alert
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import * as ImagePicker from 'expo-image-picker';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileArray: [
        {
          id: 1,
          name: "Customer Care",
        },
        {
          id: 2,
          name: "Return Creation Demo",
        },
        {
          id: 3,
          name: "How to Return",
        },
        {
          id: 4,
          name: "How do I Redeem My Coupons?",
        },
        {
          id: 5,
          name: "Terms & Conditions",
        },
        {
          id: 6,
          name: "Promotions Terms & Conditions",
        },
        {
          id: 7,
          name: "Returns & Refund Policy",
        },
        {
          id: 8,
          name: "We respect your privacy",
        },
        {
          id: 9,
          name: "Fees & Payments",
        },
        {
          id: 10,
          name: "Who We Are",
        },
        {
          id: 11,
          name: "Join Our Team",
        },
      ],
      selectedImage: 'https://media-exp1.licdn.com/dms/image/C4E03AQF0H99QBEeRjQ/profile-displayphoto-shrink_800_800/0/1551100776137?e=1620259200&v=beta&t=gBlSSRq1Fy1T1MIDzaDqJil64QIkycxWfBSfEOXlCOo'
    };
  }

  // openImage = async() => {

  //      let permission = await ImagePicker.requestCameraPermissionsAsync() ;

  //      if(permission.granted === false){
  //       console.log('jhbfnm')
  //        return;
  //      }
  //      console.log("permission mil gyi h " , permission)

      //  let picker = await ImagePicker.launchImageLibraryAsync({
      //    mediaTypes:ImagePicker.MediaTypeOptions.All ,
      //    allowsEditing:true,
      //    quality:1
      //  })
      //  if(picker.cancelled === true){
      //    return ;
      //  }
      //  console.log("picker hu m " , picker) ;
      //  this.setState({
      //    selectedImage : picker.uri
      //  })


      // let picker = await ImagePicker.launchCameraAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All ,
      //   allowsEditing:true,
      //   quality:1
      // }) 
      // if(picker.cancelled === true){
      //   return ;
      // }
      //  console.log("picker hu m " , picker) ;
      //  this.setState({
      //    selectedImage : picker.uri
      //  })
  // }

  openImage = async() => {
     
   
    Alert.alert(
      "Do you want to update",
      "Click appropriate option",
      [
        {
          text: "Camera",
          onPress: async() => {

            let permission = await ImagePicker.requestCameraPermissionsAsync();

            if (permission.granted === false) {
              
              return;
            }
            // console.log("permission mil gyi h ", permission);

            let picker =  await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              quality: 1
            });
            // console.log("picker hu m ", picker);
            this.setState({
              selectedImage: picker.uri
            })

          },
          style: "cancel",
        },
        {
          text: "Gallery",
          onPress: async() => {
            let permission = await ImagePicker.requestCameraPermissionsAsync();

            if (permission.granted === false) {
            
              return;
            }
            // console.log("permission mil gyi h ", permission);


            let picker = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              quality: 1
            })

            if (picker.cancelled === true) {
              return;
            }

            // console.log("picker hu m ", picker);
            this.setState({
              selectedImage: picker.uri
            })


          },
        },
      ],
      { cancelable: false }
    );
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <Text>{item.name}</Text>
          <Feather name="chevron-right" size={20} />
        </View>

        <View
          style={{ height: 1, width: 400, backgroundColor: "#F5F5F5" }}
        ></View>
      </View>
    );
  };

  render() {
    const { profileArray, selectedImage } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 10 }}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                margin: 18,
                color: "#252525",
              }}
            >
              My Account
            </Text>
          </View>
          <View
            style={{
              flex: 2.8,
              backgroundColor: "#f0f4f7",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={this.openImage}>
              <Image
                source={{
                  uri: selectedImage,
                }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            </TouchableOpacity>

            <View style={styles.textInput}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
                  Gulshan Gupta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 6 }}>
            <FlatList keyExtractor={item => item.id.toString()} data={profileArray} renderItem={this.renderItem} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#202020",
    padding: 15,
    width: 200,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
