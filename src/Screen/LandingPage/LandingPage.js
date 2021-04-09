import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import image from '../../constants/imagePath';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';


// import styles from './styles';

export default class OuterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
      ],
    };
  }

  render() {
    return (
      <WrapperContainer>
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={490}
            dotColor="white"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            parentWidth={this.state.width}
          />
        </View>

        <View style={{marginVertical: 20}}>
          <View style={{marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 30,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{color: '#000036', fontSize: 20, fontWeight: 'bold'}}>
                {strings.INDIAN_CODE}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION)
                }>
                <Text
                  style={{
                    color: '#ababab',
                    fontSize: 15,
                    marginHorizontal: 10,
                  }}>
                  {strings.ENTER_MOBILE_NO}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: 2,
                width: 300,
                marginHorizontal: 30,
                backgroundColor: '#4b83e9',
              }}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#4b80d0',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 30,
              marginVertical: 20,
            }}>
            <Text style={{color: '#4d72ae', margin: 8}}>
              {strings.INSURANCE_CORPORATE}
            </Text>

            <Image
              source={{
                uri: 'https://image.flaticon.com/icons/png/128/54/54833.png',
              }}
              style={{width: 15, height: 10, tintColor: '#4d72ae'}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 20,
            }}>
            <View>
              <Text style={{fontSize: 12, color: '#7c7d94'}}>
                {strings.TERMS}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 12, color: '#5979c3'}}>
                {strings.TERMS_CONDITIONS}
              </Text>
            </View>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}

const styles = StyleSheet.create({});