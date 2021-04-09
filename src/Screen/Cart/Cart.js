import React, { Component } from "react";
import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Nodata from "../../Component/Nodata";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  renderItem = ({ item , index }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 30,
          backgroundColor: "white",
          minHeight: 150,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 90,
              height: 120,
              marginVertical: 10,
              marginHorizontal: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "#636363", fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "#757575" }}>{item.text}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 2,
            }}
          >
            <Text style={{ color: "#040404", fontWeight: "bold" }}>
               {item.quantity * item.reducedPrice}
            </Text>
            <Text
              style={{ color: "#040404", textDecorationLine: "line-through" }}
            >
              {item.originalPrice}
            </Text>
            <Text style={{ color: "#209169", fontWeight: "bold" }}>
              {item.discount} OFF
            </Text>
          </View>
          <View style={{ flexDirection: "row" , marginHorizontal: 10 }}>
            <TouchableOpacity
              onPress={() => this.quantityHandler("less", index)}
              style={{ borderWidth: 1, borderColor: "#cccccc" }}
            >
              <MaterialIcons name="remove" size={22} color="#cccccc" />
            </TouchableOpacity>
            <Text
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "#cccccc",
                paddingHorizontal: 7,
                paddingTop: 3,
                color: "#bbbbbb",
                fontSize: 13,
              }}
            >
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => this.quantityHandler("more", index)}
              style={{ borderWidth: 1, borderColor: "#cccccc" }}
            >
              <MaterialIcons name="add" size={22} color="#cccccc" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  quantityHandler = (action, index) => {

    const { cart_Array = [] } = this.props;

   
    const newItems = [...cart_Array];

    let currentQty = newItems[index]['quantity'];

    if(action == 'more'){
    	newItems[index]['quantity'] = currentQty + 1;

    } else if(action == 'less'){
    	newItems[index]['quantity'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({ cart_Array: newItems });

  };

  subtotalPrice = () => {
		const { cart_Array = [] } = this.props;
		if(cart_Array){
			return cart_Array.reduce((sum, item) => sum + ( item.quantity * item.reducedPrice ), 0 );
		}
		return 0;
	}

  render() {
    const { cart_Array = [] } = this.props;


    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            minHeight: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={{ marginRight: 200, fontWeight: "bold" }}>Bag</Text>

          <AntDesign name="hearto" size={25} />
        </View>

        {cart_Array.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: "#f0f4f7" }}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={cart_Array}
              renderItem={this.renderItem}
            />
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: "#f0f4f7" }}>
            <Nodata data="Cart" />
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: 70,
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "column", marginEnd: 20 }}>
            <Text style={{ color: "#040404", fontWeight: "bold" }}>{this.subtotalPrice()}</Text>
            <Text style={{ color: "blue" }}>View Details</Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("confirm" , {data:data})}
          >
            <View
              style={{
                backgroundColor: "#202020",
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                paddingHorizontal: 40,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#fbfbfb" }}> Confirm Order</Text>
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
