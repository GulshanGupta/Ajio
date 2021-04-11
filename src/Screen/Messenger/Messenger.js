import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import Header from "../../Component/Header";
import colors from "../../styles/colors";
import strings from "../../constants/lang";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";


class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      chatsData: [],
      commonConversationId: null,
    };
  }

  _onPress = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  onPress = (item) => {
    console.log(item.commonConversationId, "THIS IS ID");

    this.props.navigation.navigate(navigationStrings.CHAT, {
      commonConversationId: item.commonConversationId,
      _id: item._id,
      fullName: item.userInfo.fullName,
      profileImg: item.userInfo.profileImg,
    });
  };
  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    const { limit, searchData } = this.state;

    actions
      .OnGetAllConversations(limit)
      .then((response) => {
        console.log(response);
        this.setState({
          chatsData: response.data,

          //   isLoadingMore: false,
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   searchData: [],
        //   isLoadingMore: false,
        // });
      });
  };

  renderItem = ({ item }) => {
    const str = item.createdAt;
    const time = str.substring(16, 11);
    return (
      <View>
        <TouchableOpacity onPress={() => this.onPress(item)}>
          <View style={styles.chatRow}>
            <View style={styles.dp}>
              <Image
                style={styles.dpLogo}
                source={{
                  uri: item.userInfo.profileImg[0].thumbnail,
                }}
              />
            </View>

            <View style={styles.freeSpace}></View>

            <View style={styles.nameHeading}>
              <View style={styles.firstLineinnameHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {item.userInfo.fullName}
                </Text>
                <Text>{time}</Text>
              </View>

              <Text>{item.lastMessage[0].text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { isLoggedin, data } = this.props;
    const { chatsData } = this.state;

    return (
      <SafeAreaView style={styles.flex_one}>
        <Header
          bgcolor={colors.header_color_purple}
          headingText={strings.MESSENGER}
          _onPress={this._onPress}
        />

        <FlatList
          data={chatsData}
          onEndReachedThreshold={1}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id}
        />
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

export default connect(mapStateToProps)(Messenger);
