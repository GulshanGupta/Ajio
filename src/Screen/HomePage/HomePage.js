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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: [
        {
          id: 1,
          name: "BROOKS BROTHER",
          text: "Hopsack Blazer",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210211/9A63/6024305aaeb2696981627e0d/brooks_brothers_navy_blue_hopsack_blazer_with_flap_pockets.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 2,
          name: "TOMMY HILFIGER",
          text: "Skinny Fit Jeans",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20200827/NiLO/5f47b605f997dd6918ae1229/tommy_hilfiger_blue_lightly_washed_skinny_fit_jeans.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 3,
          name: "LEVIS",
          text: "Slim Fit Jeans",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210205/ywCD/601c49caf997dd5c40e808f2/levis_blue_washed_slim_fit_jeans.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 4,
          name: "ADIDAS",
          text: "Sports Shoes",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210122/NheG/6009cad07cdb8c1f142c7435/adidas_black_ultraboost_20_panelled_lace-up_sports_shoes.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 5,
          name: "UCB",
          text: "striped t-shirt",
          image:
            "https://assets.ajio.com/medias/sys_master/root/he6/hb6/13806031208478/united_colors_of_benetton_purple_striped_cotton_polo_t-shirt.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 6,
          name: "levis",
          text: "tapered joggers",
          image:
            "https://assets.ajio.com/medias/sys_master/root/h5a/h70/15697574920222/levis_olive_green_512_white_tab_slim_tapered_joggers.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 7,
          name: "F gear",
          text: "Travel Backpack",
          image:
            "https://assets.ajio.com/medias/sys_master/root/hfc/hbe/12732394635294/f-gear_black_textured_travel_backpack_with_adjustable_shoulder_straps.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 8,
          name: "indie picks",
          text: "slim fit long kurta",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201117/jeRs/5fb2c664f997dd8c839c68ad/indie_picks_brown_pure_silk_viscose_slim_fit_long_kurta.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 9,
          name: "louis philippe",
          text: "nehru jacket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/h6c/h74/17108654489630/louis_philippe_brown_textured_slim_fit_nehru_jacket.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 10,
          name: "flying machine",
          text: "slim fit shirt",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201006/F1dN/5f7b6fbdf997dd8c83583fe4/flying_machine_black_slim_fit_shirt_with_curved_hemline.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 11,
          name: "armani exchange",
          text: "sweatshirt with zippers",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201104/pGab/5fa1a690f997dd8c83825de1/armani_exchange_grey_heathered_hooded_sweatshirt_with_zippers.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 12,
          name: "tommy hilfiger",
          text: "Wallet and belt Set",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20200915/XOnq/5f5fbffdaeb269d563be852c/tommy_hilfiger_multicoloured_textured_bi-fold_wallet_&_belt_set.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 13,
          name: "team spirit",
          text: "Heathered joggers",
          image:
            "https://assets.ajio.com/medias/sys_master/root/hcb/h36/15164222996510/teamspirit_maroon_heathered_joggers_with_insert_pockets.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
        {
          id: 14,
          name: "nike",
          text: "running shoes",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20200918/oVHV/5f63b1c7f997dd8c8341761b/nike_white_zoom_pegasus_turbo_2_running_sports_shoes.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: 650,
          discount: "75%",
          quantity:1
        },
      ],
      cartArray: [],
    };
  }


  _onPress = (item) => {
    const {cartArray} = this.state ;
    this.props.navigation.navigate("Details", {
      data: item ,
      cartArray:cartArray
      // myFun: this._onAddToCart
    });
  };

  _onAddToCart = (item) => {
    const { cartArray, productsArray } = this.state;

    let blankcartArray = [...productsArray];

    if (!cartArray.includes(blankcartArray[item.id - 1 ])) {
      cartArray.push(blankcartArray[item.id - 1]);
      
    } else {
      console.log("entered else ");
      alert("Item already in Cart")

    }

    this.setState({
      cartArray: cartArray,
    });

    
    
  }

  _onclicktocart = () => {

    const { cartArray, productsArray } = this.state;
    this.props.navigation.navigate("Cart", { data: cartArray });

  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      if (this.props.route.params) {
        let itemsadd = this.props.route.params.data;
        this._onAddToCart(itemsadd);

        this.props.route.params = null;
      }
    });
  }

  componentWillUnmount() {
    if (this.focusListener) {
      this.focusListener();
    }
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 180,
              height: 180,
              resizeMode: "contain",
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 8,
              marginBottom: 5,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "#6c6c6c", fontWeight: "bold" }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "#747474" }}>{item.text}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "#141414", fontWeight: "bold" }}>
            {item.reducedPrice}
          </Text>
          <Text
            style={{
              color: "#7d7d7d",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {item.originalPrice}
          </Text>
          <Text style={{ color: "#06bc79", fontWeight: "bold" }}>
            {item.discount}
          </Text>
        </View>
        <TouchableOpacity onPress={() => this._onAddToCart(item)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#f0f4f7",
              marginHorizontal: 35,
              minHeight: 30,
            }}
          >
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
    const { productsArray, cartArray } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar animated={true} backgroundColor="white" hidden={false} />
        <View style={{ flex: 10 }}>
          <View style={styles.header}>
            <View style={styles.forlogoHeading}>
              <Feather name="menu" size={25} style={styles.iconSpacing} />

              <Image
                source={require("./ajio_logo.jpg")}
                style={{ width: 65, height: 65 }}
              />

              <AntDesign name="down" size={15} style={styles.iconSpacing} />

              <Text style={{ color: "red", fontWeight: "bold" }}>
                {cartArray.length}
              </Text>
              
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
                color="#9c9e9f"
                style={styles.iconSpacing}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Search by Product, Brand & more..."
              ></TextInput>
            </View>
          </View>

          <View style={{ flex: 7, backgroundColor: "white" }}>
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

const styles = StyleSheet.create({
  forlogoHeading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    maxHeight: 50,
    borderRadius: 12,
    marginLeft: 32,
  },
  inputField: {
    padding: 8,
  },
  header: {
    flex: 2,
    backgroundColor: "#f0f4f7",
    justifyContent: "space-around",
  },
});
