import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Nodata from "../../Component/Nodata";
import { connect } from "react-redux";
import navigationStrings from "../../constants/navigationStrings";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import styles from "./styles";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.marginhorizontalTen}>
            <Text style={styles.productName}>{item.name}</Text>
          </View>
          <View style={styles.marginhorizontalTen}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.reducedPrice}>
              {item.quantity * item.reducedPrice}
            </Text>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <Text style={styles.discount}>
              {item.discount} {strings.OFF}
            </Text>
          </View>
          <View style={styles.quantityHandlerContainer}>
            <TouchableOpacity
              onPress={() => this.quantityHandler("less", index)}
              style={styles.box}
            >
              <MaterialIcons
                name="remove"
                size={22}
                color={colors.verylightgrey}
              />
            </TouchableOpacity>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => this.quantityHandler("more", index)}
              style={styles.box}
            >
              <MaterialIcons
                name="add"
                size={22}
                color={colors.verylightgrey}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  quantityHandler = (action, index) => {
    const { cart_Array = [] } = this.props;

    const newItems = [...cart_Array];

    let currentQty = newItems[index]["quantity"];

    if (action == "more") {
      newItems[index]["quantity"] = currentQty + 1;
    } else if (action == "less") {
      newItems[index]["quantity"] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({ cart_Array: newItems });
  };

  subtotalPrice = () => {
    const { cart_Array = [] } = this.props;
    if (cart_Array) {
      return cart_Array.reduce(
        (sum, item) => sum + item.quantity * item.reducedPrice,
        0
      );
    }
    return 0;
  };

  render() {
    const { cart_Array = [] } = this.props;

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

          <Text style={styles.headerHeading}>{strings.BAG}</Text>

          <AntDesign name="hearto" size={25} />
        </View>

        {cart_Array.length > 0 ? (
          <View style={styles.cartItemsContainer}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={cart_Array}
              renderItem={this.renderItem}
            />
          </View>
        ) : (
          <View style={styles.cartItemsContainer}>
            <Nodata data="Cart" />
          </View>
        )}

        <View style={styles.cartpagefooterContainer}>
          <View style={styles.totalpriceContainer}>
            <Text style={styles.totalPrice}>{this.subtotalPrice()}</Text>
            <Text style={styles.details}>{strings.VIEW_DETAILS}</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.CONFIRMED_ORDER)
            }
          >
            <View style={styles.confirmorderButtonConatainer}>
              <Text style={styles.confirmordertext}>
                {strings.CONFIRM_ORDER}
              </Text>
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
  };
};

export default connect(mapStateToProps)(Cart);
