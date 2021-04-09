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

  // componentDidMount() {
  //   locationPermission()
  //     .then((response) => {
  //       console.log(response);
  //       alert(response);
  //       Geolocation.getCurrentPosition(
  //         (position) => {
  //           console.log(position);
  //         },
  //         (error) => {
  //           console.log(error.code, error.message);
  //         },
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 30,
          backgroundColor: "white",
          minHeight: 150,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Image
            source={{ uri: item.profileImg[0].thumbnail }}
            style={{
              width: 90,
              height: 120,
              marginVertical: 10,
              marginHorizontal: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: colors.black, fontWeight: "bold" }}>
              {item.fullName}
            </Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
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
            onPress={() => this.props.navigation.navigate(navigationStrings.HOME)}
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={styles.text_search}>{strings.SEARCH}</Text>

          <AntDesign name="hearto" size={25} />
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.top_portion}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View style={styles.textInput}>
                <EvilIcons
                  name="search"
                  size={25}
                  color="#9c9e9f"
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

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
    width: 200,
    maxHeight: 50,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  inputField: {
    padding: 8,
  },
  safeareaview: { flex: 1, backgroundColor: colors.white },
  navbar: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text_search: { marginRight: 200, fontWeight: "bold" },
  top_portion: {
    flex: 0.3,
    flexDirection: "column",
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
  },
  bottom_portion: { flex: 0.8, backgroundColor: colors.backgroundColor },
});
