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
import Header from "../../Component/Header";
import colors from "../../styles/colors";
import strings from "../../constants/lang";
import Video from "react-native-video";

export default class VideoScreen extends Component {
  _onPress = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  videoBuffer = (isBuffer) => {
    console.log(isBuffer);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeareaview}>
        <Header
          bgcolor={colors.header_color_purple}
          headingText={strings.VIDEO}
          _onPress={this._onPress}
        />

        <View style={styles.videoContainer}>
          <Video
            resizeMode="contain"
            controls={true}
            source={{
              uri:
                "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1",
            }}
            ref={(ref) => {
              this.player = ref;
            }}
            onBuffer={this.videoBuffer}
            style={styles.backgroundVideo}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  backgroundVideo: {
    width: 300,
    height: 300,
  },
  videoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
