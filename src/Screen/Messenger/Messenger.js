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

class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      chatsData: [],
      commonConversationId:null
    };
  }

  onPress = (item) => {
      console.log(item.commonConversationId , "THIS IS ID") ;

    this.props.navigation.navigate("Chat" , { commonConversationId : item.commonConversationId  ,
    _id : item._id , fullName : item.userInfo.fullName , profileImg:item.userInfo.profileImg  });
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
      <SafeAreaView style={{ flex: 1 }}>
        <Header bgcolor="rgba(134, 65, 244, 0.8)" headingText="Messenger" />
        <View>
          <FlatList
            data={chatsData}
            onEndReachedThreshold={1}
            renderItem={this.renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  dpLogo: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  chatRow: {
    flex: 10,
    flexDirection: "row",
    margin: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  dp: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  nameHeading: {
    flex: 7.5,
    justifyContent: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 0.2,
  },
  freeSpace: {
    flex: 0.5,
  },
  firstLineinnameHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.isLoggedin,
    data: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Messenger);
