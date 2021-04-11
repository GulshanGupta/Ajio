import React, { Component } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Geolocation from "react-native-geolocation-service";
import colors from "../../styles/colors";
import actions from "../../redux/actions";
import { locationPermission } from "../../utils/permissions";
import Formbutton from "../../Component/Formbutton";
import { MaterialIndicator } from "react-native-indicators";
import strings from "../../constants/lang/en";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      timeout: null,
      searchData: [],
      buttonText: strings.GET_PEOPLE_NEARBY_YOU,
      isLoadingMore: false,
    };
  }

  //  const {timeout} = this.state;

  //   this.setState({searchString: value}, () => {
  //     if (this.state.searchString.length == 0) {
  //       clearTimeout(timeout);
  //       this.setState({profile: []});
  //     } else {
  //       clearTimeout(timeout);
  //       this.setState({
  //         timeout: setTimeout(() => {
  //           // console.log(this.state);
  //           this.makeRequest();
  //         }, 3000),
  //       });
  //     }
  //   });

  onGetLocation = () => {
    const { isLoadingMore } = this.state;
    this.setState({
      isLoadingMore: true,
    });
    locationPermission()
      .then((response) => {
        console.log(response);
        Geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            actions
              .OnNearUserbyCoordinates(long, lat)
              .then((response) => {
                console.log(response);
                this.setState({
                  searchData: response.data,
                  isLoadingMore: false,
                });
              })
              .catch((error) => {
                console.log(error);
                this.setState({
                  searchData: [],
                  isLoadingMore: false,
                });
              });
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.profileImg[0].thumbnail }}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.marginhorizontalTen}>
            <Text style={styles.textStyle}>{item.fullName}</Text>
          </View>
          <View style={styles.marginhorizontalTen}>
            <Text style={{ color: colors.black_api }}>{item.email}</Text>
          </View>
        </View>
      </View>
    );
  };

  changeTextInput = (value) => {
    const { searchInput, isLoadingMore } = this.state;

    this.setState({
      searchInput: value,
      isLoadingMore: true,
    });
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.makeRequest();
    }, 3000);
  };

  makeRequest = () => {
    const { searchInput, searchData } = this.state;

    actions
      .OnNearUser(searchInput)
      .then((response) => {
        console.log(response.data);
        this.setState({
          searchData: response.data,
          isLoadingMore: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          searchData: [],
          isLoadingMore: false,
        });
      });
  };

  render() {
    const { searchInput, searchData, buttonText, isLoadingMore } = this.state;
    return (
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.HOME)
            }
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={styles.text_search}>{strings.SEARCH_ONLY}</Text>

          <AntDesign name="hearto" size={25} />
        </View>

        <View style={styles.flexOne}>
          <View style={styles.top_portion}>
            <View style={styles.searchContainer}>
              <View style={styles.textInput}>
                <EvilIcons
                  name="search"
                  size={25}
                  color={colors.lightgrey}
                  style={styles.iconSpacing}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder={strings.SEARCH_BY_NAME}
                  onChangeText={(value) => this.changeTextInput(value)}
                ></TextInput>

                {isLoadingMore ? (
                  <MaterialIndicator
                    color={colors.grey_material_indicator}
                    size={20}
                  />
                ) : (
                  <View></View>
                )}
              </View>
            </View>

            <Formbutton onPress={this.onGetLocation} text={buttonText} />
          </View>

          <View style={styles.bottom_portion}>
            <FlatList
              data={searchData}
              onEndReachedThreshold={1}
              renderItem={this.renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
