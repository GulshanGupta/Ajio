import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import store from "../../redux/store";
import types from "../../redux/types";
import navigationStrings from "../../constants/navigationStrings";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import styles from "./styles";

const { dispatch } = store;

class Details extends Component {
  constructor(props) {
    super(props);
  }

  _onclicktocart = () => {
    this.props.navigation.navigate(navigationStrings.CART);
  };

  // _onAddToCart = (item) => {
  //   const { array } = this.props.route.params;

  //   let blankcartArray = [...array];

  //   dispatch({
  //     type: types.ADD_TO_CART,
  //     payload: { blankcartArray, item },
  //   });
  // };

  // addCart = () =>{
  //   const { data, myFun } = this.props.route.params;
  //   myFun(data)
  // }

  render() {
    // const { data, myFun , cartArray} = this.props.route.params;
    // const sliderWidth = 10 ;
    // const itemWidth = 10 ;

    const { data, cart_Array = [] } = this.props;

    return (
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.headerContainer}>
          <View style={styles.flexStart}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(navigationStrings.HOME)
              }
            >
              <AntDesign
                name="arrowleft"
                size={30}
                style={styles.marginhfifteen}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.spacearound}>
            <EvilIcons name="search" size={30} style={styles.marginhTen} />
            <EvilIcons name="heart" size={30} style={styles.marginhTen} />
            <Text style={styles.cartQuantity}>{cart_Array.length}</Text>

            <TouchableOpacity onPress={this._onclicktocart}>
              <AntDesign
                name="shoppingcart"
                size={25}
                style={styles.marginhTen}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
            <Pagination
        dotsLength={data.length}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        
      /> */}
        <ScrollView>
          <View>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>

          <View style={styles.bgWhite}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{data.name}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{data.text}</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.reducedPrice}>{data.reducedPrice}</Text>
              <Text style={styles.originalPrice}>{data.originalPrice}</Text>
              <Text style={styles.discount}>
                {data.discount} {strings.OFF}
              </Text>
            </View>
            <View style={styles.marginbTen}>
              <Text style={styles.tax}>{strings.TAX}</Text>
            </View>
          </View>
          <View style={styles.heightTwelve}></View>

          <View style={styles.bgWhite}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{strings.COLOR}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{strings.BLACK}</Text>
            </View>
            <View style={styles.blackCircle}></View>
          </View>
          <View style={styles.heightTwelve}></View>
          <View style={styles.bgWhite}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{strings.SIZE}</Text>

              <View style={styles.sizeContainer}>
                <View style={styles.size}>
                  <Text>{strings.SIZE_28}</Text>
                </View>

                <View style={styles.size}>
                  <Text>{strings.SIZE_30}</Text>
                </View>

                <View style={styles.size}>
                  <Text>{strings.SIZE_32}</Text>
                </View>

                <View style={styles.size}>
                  <Text>{strings.SIZE_34}</Text>
                </View>
                <View style={styles.size}>
                  <Text>{strings.SIZE_36}</Text>
                </View>

                <View style={styles.size}>
                  <Text>{strings.SIZE_38}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.heightTwelve}></View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="whatsapp" size={30} color={colors.black} />
          </View>
          <View style={styles.iconContainer}>
            <EvilIcons name="heart" size={30} />
          </View>

          <TouchableOpacity
          // onPress={
          //   // () => this.props.navigation.navigate("Home")
          //    data => this._onAddToCart(data)
          // }
          >
            <View style={styles.addToBagButton}>
              <AntDesign
                name="shoppingcart"
                size={25}
                color={colors.lightwhite}
              />

              <Text style={styles.textColor}>{strings.ADD_TO_BAG}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart_Array: state.home.cart_array,
    data: state.home.item,
  };
};

export default connect(mapStateToProps)(Details);

