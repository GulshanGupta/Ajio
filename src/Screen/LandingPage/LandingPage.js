import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import WrapperContainer from "../../Component/WrapperContainer";
import strings from "../../constants/lang/en";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import styles from "./styles";

export default class OuterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        imagePath.carousel,
        imagePath.carousel,
        imagePath.carousel,
        imagePath.carousel,
      ],
    };
  }

  _onPress = () => {
    this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };

  render() {
    return (
      <WrapperContainer>
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={490}
            dotColor={colors.white}
            inactiveDotColor={colors.grey_inactivedot_color}
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            parentWidth={this.state.width}
          />
        </View>

        <View style={styles.mainView}>
          <View style={styles.insidemainView}>
            <View style={styles.forphoneNumber}>
              <Text style={styles.indianCode}>{strings.INDIAN_CODE}</Text>
              <TouchableOpacity onPress={this._onPress}>
                <Text style={styles.mobileNumber}>
                  {strings.ENTER_MOBILE_NO}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.forhorizontalLine}></View>
          </View>

          <View style={styles.insuranceOrCorporateView}>
            <Text style={styles.insuranceOrCorporateText}>
              {strings.INSURANCE_CORPORATE}
            </Text>

            <Image
              source={{
                uri: imagePath.right_arrow,
              }}
              style={styles.forImage}
            />
          </View>

          <View style={styles.termsAndConditionView}>
            <View>
              <Text style={styles.termsText}>{strings.TERMS}</Text>
            </View>
            <View>
              <Text style={styles.conditionText}>
                {strings.TERMS_CONDITIONS}
              </Text>
            </View>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}
