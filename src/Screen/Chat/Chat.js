import React, { Component } from "react";
import { View, Text, SafeAreaView , StyleSheet } from "react-native";
import { GiftedChat, Bubble, Composer, Send } from "react-native-gifted-chat";
import actions from "../../redux/actions";
import Header from "../../Component/Header";
import { connect } from "react-redux";
import { SOCKET_STRINGS } from "../../utils/constants/constants";
import socketServices from "../../utils/socketService";
import colors from "../../styles/colors";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
      const {  userData } = this.props ;
    this.makeRequest();
    socketServices.initializeSocket(userData.accessToken)
    // socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
  }

  onSend(messages = []) {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const { commonConversationId , _id } = this.props.route.params;
    const { userData } = this.props;
    // To send new message
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: _id,
      commonConversationId,
      messageType: "Text",
      text: messages[0].text,
    });
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  makeRequest = () => {
    const { commonConversationId , profileImg } = this.props.route.params;


    actions
      .getUserMessageOneToOne(commonConversationId)
      .then((response) => {
        console.log(response);

        const messages = response.data.map((data, index) => {
            let message = {
              _id: data._id,
              text: data.text,
              createdAt: data.createdAt,
              user: {
                _id: data.senderId._id,
                name: data.senderId.firstName,
                // avatar: data.senderId.profileImg[0].thumbnail,
                avatar:  profileImg && profileImg[0].thumbnail
              },
            };
            if (!!data.repliedToText) {
                message.replyText = data.repliedToText;
              }
              return message;
            });
            this.setState({ messages : messages });
          })
        // this.setState({
        //   chatsData: response.data,

        //   //   isLoadingMore: false,
        // });
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   searchData: [],
        //   isLoadingMore: false,
        // });
      });
  };

  render() {
    const { fullName } = this.props.route.params;
    const { messages } = this.state;
    const { userData } = this.props ;
    console.log(messages , "THESE ARE MESSAGES ") ;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          bgcolor="rgba(134, 65, 244, 0.8)"
          headingText={fullName}
        />

        <GiftedChat
          messages={messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: userData._id,
          }}
          textInputStyle={styles.messgeTextInput}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  messgeTextInput: {
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS == "ios" ? 10 : undefined,
    borderRadius: 50,
    paddingHorizontal: 20,
    textAlignVertical: "center",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => {
    return {
      isLoggedin: state.auth.isLoggedin,
      userData: state.auth.userData,
    };
  };

  export default connect(mapStateToProps)(Chat);
