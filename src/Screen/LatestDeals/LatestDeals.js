import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import actions from "../../redux/actions";
import { connect } from "react-redux";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Nodata from "../../Component/Nodata";
import colors from "../../styles/colors";
import { MaterialIndicator } from "react-native-indicators";

class LatestDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0 ,
      isLoading: true,
      isLoadingMore: false,
      isNoMoreData: false,
      refreshing: false,
      userSearchData:[]
    };
  }

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

  componentDidMount() {
    this.makeRequest();
  }

  _onEndReached = () => {
    const { isLoadingMore, isNoMoreData } = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({ isLoadingMore: true });
    this.makeRequest(true);
  };

  _onRefresh = () => {
    this.setState({ refreshing: true, isNoMoreData: false });
    this.makeRequest();
  };

  makeRequest = (onEndReachCall = false) => {
    
    const {skip, userSearchData , isListEnd } = this.state;

    let calcSkip = onEndReachCall ? skip + userSearchData.length : 0;

    let dataSend = {
      searchType: "LEADERBOARD",
      limit: "10",
      skip: calcSkip,
    };

    actions
      .onUserSearch(dataSend)
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {

          let profilesData = onEndReachCall
              ? [...userSearchData, ...response.data]
              : response.data;
          this.setState({
            userSearchData: profilesData,
            isLoading: false,
            isLoadingMore: false,
            refreshing: false,
          });
        } else {
          this.setState({
            isListEnd: true,
            isNoMoreData: true,
            isLoading: false,
            isLoadingMore: false,
            refreshing: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false, isLoadingMore: false });
      });
  };

  footer = () => {
    const { isLoadingMore } = this.state;
    if (isLoadingMore) {
      return (
        <View style={{ paddingBottom: 40 }}>
          <MaterialIndicator color="grey" />
        </View>
      );
    }
    return <View style={{ height: 50 }} />;
  };

  render() {
    const {isLoading , isLoadingMore, refreshing , userSearchData } = this.state;

    console.log("SEARCH DATA IN RENDER", userSearchData);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View
          style={{
            minHeight: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={{ marginRight: 200, fontWeight: "bold" }}>Users</Text>

          <AntDesign name="hearto" size={25} />
        </View>
        <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
          <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
            data={userSearchData}
            onEndReachedThreshold={1}
            renderItem={this.renderItem}
            onEndReached={this._onEndReached}
            keyExtractor={(item) => item._id}
            ListFooterComponent={this.footer}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.isLoggedin,
    data: state.auth.userData,
  };
};

export default connect(mapStateToProps)(LatestDeals);
