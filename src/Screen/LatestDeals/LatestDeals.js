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
  StyleSheet,
} from "react-native";
import actions from "../../redux/actions";
import { connect } from "react-redux";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Nodata from "../../Component/Nodata";
import colors from "../../styles/colors";
import { MaterialIndicator } from "react-native-indicators";
import navigationStrings from "../../constants/navigationStrings";
import strings from "../../constants/lang";
import styles from "./styles";

class LatestDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0,
      isLoading: true,
      isLoadingMore: false,
      isNoMoreData: false,
      refreshing: false,
      userSearchData: [],
    };
  }

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
          <View style={styles.marginhorizontalten}>
            <Text style={styles.name}>{item.fullName}</Text>
          </View>
          <View style={styles.marginhorizontalten}>
            <Text style={styles.email}>{item.email}</Text>
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
    const { skip, userSearchData, isListEnd } = this.state;

    let calcSkip = onEndReachCall ?userSearchData.length : 0;

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
        <View style={styles.footerpadding}>
          <MaterialIndicator color={colors.grey_material_indicator} />
        </View>
      );
    }
    return <View style={styles.heightfifty} />;
  };

  render() {
    const { isLoading, isLoadingMore, refreshing, userSearchData } = this.state;

    console.log("SEARCH DATA IN RENDER", userSearchData);
    return (
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.HOME)
            }
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={styles.headerHeading}>{strings.USERS}</Text>

          <AntDesign name="hearto" size={25} />
        </View>
        <View style={styles.flatlistContainer}>
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
