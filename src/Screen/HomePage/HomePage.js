import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Nodata from "../../Component/Nodata";
import store from "../../redux/store";
import types from "../../redux/types";
import { connect } from "react-redux";
import navigationStrings from "../../constants/navigationStrings";
import imagePath from "../../constants/imagePath";
import colors from "../../styles/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import strings from "../../constants/lang";
import styles from "./styles";


const { dispatch } = store;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: [
        {
          id: 1,
          name: "BROOKS BROTHER",
          text: "Hopsack Blazer",
          image: imagePath.product_one,
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 2,
          name: "TOMMY HILFIGER",
          text: "Skinny Fit Jeans",
          image: imagePath.product_two,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 3,
          name: "LEVIS",
          text: "Slim Fit Jeans",
          image: imagePath.product_three,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 4,
          name: "ADIDAS",
          text: "Sports Shoes",
          image: imagePath.product_four,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 5,
          name: "UCB",
          text: "striped t-shirt",
          image: imagePath.product_five,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 6,
          name: "levis",
          text: "tapered joggers",
          image: imagePath.product_six,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 7,
          name: "F gear",
          text: "Travel Backpack",
          image: imagePath.product_seven,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 8,
          name: "indie picks",
          text: "slim fit long kurta",
          image: imagePath.product_eight,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 9,
          name: "louis philippe",
          text: "nehru jacket",
          image: imagePath.product_nine,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 10,
          name: "flying machine",
          text: "slim fit shirt",
          image: imagePath.product_ten,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 11,
          name: "armani exchange",
          text: "sweatshirt with zippers",
          image: imagePath.product_eleven,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 12,
          name: "tommy hilfiger",
          text: "Wallet and belt Set",
          image: imagePath.product_twelve,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 13,
          name: "team spirit",
          text: "Heathered joggers",
          image: imagePath.product_thirteen,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
        {
          id: 14,
          name: "nike",
          text: "running shoes",
          image: imagePath.product_fourteen,

          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity: 1,
        },
      ],
    };
  }

  _onPress = (item) => {
    const { productsArray } = this.state;

    dispatch({
      type: types.PRODUCT_DETAILS,
      payload: { item },
    });

    this.props.navigation.navigate(navigationStrings.DETAILS, {
      array: productsArray,
    });
    // data: item,
    // cartArray: cartArray,
    // myFun: this._onAddToCart
  };

  _onAddToCart = (item) => {
    const { productsArray } = this.state;

    let blankcartArray = [...productsArray];

    dispatch({
      type: types.ADD_TO_CART,
      payload: { blankcartArray, item },
    });
  };

  _onclicktocart = () => {
    const { productsArray } = this.state;
    this.props.navigation.navigate(navigationStrings.CART);
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </TouchableOpacity>
        <View style={styles.productNameContainer}>
          <Text style={styles.productNameTextStyle}>{item.name}</Text>
        </View>
        <View style={styles.productDescContainer}>
          <Text style={styles.productTextColor}>{item.text}</Text>
        </View>
        <View style={styles.productFooter}>
          <Text style={styles.reducedPrice}>{item.reducedPrice}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
        <TouchableOpacity onPress={() => this._onAddToCart(item)}>
          <View style={styles.addtocart}>
            <Text>Add to Cart</Text>
            <FontAwesome5
              name="cart-plus"
              size={15}
              style={styles.iconSpacing}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { productsArray } = this.state;
    const { cart_Array } = this.props;

    return (
      <SafeAreaView style={styles.flexOne}>
        <StatusBar
          animated={true}
          backgroundColor={colors.white}
          hidden={false}
        />
        <View style={styles.flexTen}>
          <View style={styles.header}>
            <View style={styles.forlogoHeading}>
              <Feather name="menu" size={25} style={styles.iconSpacing} />

              <Image source={imagePath.ajio_logo} style={styles.ajioLogo} />

              <AntDesign name="down" size={15} style={styles.iconSpacing} />

              <Text style={styles.cartLength}>{cart_Array.length}</Text>

              <TouchableOpacity onPress={this._onclicktocart}>
                <AntDesign
                  name="shoppingcart"
                  size={25}
                  style={styles.iconSpacing}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.textInput}>
              <EvilIcons
                name="search"
                size={25}
                color={colors.lightgrey}
                style={styles.iconSpacing}
              />
              <TextInput
                style={styles.inputField}
                placeholder={strings.SEARCH}
              ></TextInput>
            </View>
          </View>

          <View style={styles.forFlatList}>
            {productsArray.length > 0 ? (
              <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={productsArray}
                renderItem={this.renderItem}
                numColumns="2"
              />
            ) : (
              <Nodata data="Homepage" />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart_Array: state.home.cart_array,
  };
};

export default connect(mapStateToProps)(HomePage);


