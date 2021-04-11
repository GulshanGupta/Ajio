import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import imagePath from "../../constants/imagePath";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import styles from "./styles";


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
      selectedImage: imagePath.selectedImage,
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

  openImage = async () => {
    Alert.alert(
      strings.SELECT,
      [
        {
          text: "Camera",
          onPress: async () => {
            let permission = await ImagePicker.requestCameraPermissionsAsync();

            if (permission.granted === false) {
              return;
            }

            let picker = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              quality: 1,
            });

            this.setState({
              selectedImage: picker.uri,
            });
          },
          style: "cancel",
        },
        {
          text: "Gallery",
          onPress: async () => {
            let permission = await ImagePicker.requestCameraPermissionsAsync();

            if (permission.granted === false) {
              return;
            }

            let picker = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              quality: 1,
            });

            if (picker.cancelled === true) {
              return;
            }

            this.setState({
              selectedImage: picker.uri,
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.optionsContainer}>
          <Text>{item.name}</Text>
          <Feather name="chevron-right" size={20} />
        </View>

        <View style={styles.horizontalLine}></View>
      </View>
    );
  };

  render() {
    const { profileArray, selectedImage } = this.state;
    return (
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.flexten}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerHeading}>My Account</Text>
          </View>
          <View style={styles.middleContainer}>
            <TouchableOpacity onPress={this.openImage}>
              <Image
                source={{
                  uri: selectedImage,
                }}
                style={styles.userimage}
              />
            </TouchableOpacity>

            <View style={styles.textInput}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.userName}>{strings.USER_NAME}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomflexSix}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={profileArray}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

