import React, { Component } from "react";
import { View, Text, Image, StyleSheet , SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class Details extends Component {
  constructor(props) {
    super(props);
  }


  _onclicktocart = () => {

    const {cartArray} = this.props.route.params;
    this.props.navigation.navigate("Cart", { data: cartArray  });

  }
  // addCart = () =>{ 
  //   const { data, myFun } = this.props.route.params;
  //   myFun(data)
  // }

  render() {
    const { data, myFun , cartArray} = this.props.route.params;
    // const sliderWidth = 10 ;
    // const itemWidth = 10 ;
  

    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 60,
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
            <AntDesign
              name="arrowleft"
              size={30}
              style={{ marginHorizontal: 15 }}
            />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <EvilIcons
              name="search"
              size={30}
              style={{ marginHorizontal: 10 }}
            />
            <EvilIcons
              name="heart"
              size={30}
              style={{ marginHorizontal: 10 }}
            />
            <Text style={{ color: "red", fontWeight: "bold" }}>
                {cartArray.length}
              </Text>
            
            <TouchableOpacity onPress={this._onclicktocart}>
            <AntDesign
              name="shoppingcart"
              size={25}
              style={{ marginHorizontal: 10 }}
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
            <Image
              source={{ uri: data.image }}
              style={{
                width: 400,
                height: 400,
                resizeMode: "contain",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 5,
              }}
            />
          </View>

          <View style={{ backgroundColor: "white" }}>
            <View
              style={{ marginVertical: 2, marginHorizontal: 20, marginTop: 10 }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                {data.name}
              </Text>
            </View>
            <View style={{ marginVertical: 2, marginHorizontal: 20 }}>
              <Text style={{ color: "#8d8d8d" }}>{data.text}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "#121212",
                  fontWeight: "bold",
                  marginHorizontal: 10,
                }}
              >
                {data.reducedPrice}
              </Text>
              <Text
                style={{
                  color: "#686868",
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                  margin: 2,
                  marginHorizontal: 10,
                }}
              >
                {data.originalPrice}
              </Text>
              <Text
                style={{
                  color: "#11b877",
                  margin: 2,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                {data.discount} OFF
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: "#727272",
                  margin: 2,
                  fontSize: 12,
                  marginHorizontal: 20,
                }}
              >
                Price Inclusive of all taxes.
              </Text>
            </View>
          </View>
          <View style={{ minHeight: 12 }}></View>

          <View style={{ backgroundColor: "white" }}>
            <View
              style={{ marginVertical: 2, marginHorizontal: 20, marginTop: 10 }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Color
              </Text>
            </View>
            <View style={{ marginVertical: 2, marginHorizontal: 20 }}>
              <Text style={{ color: "#8d8d8d" }}>Black</Text>
            </View>
            <View
              style={{
                marginVertical: 2,
                marginHorizontal: 20,
                width: 40,
                height: 40,
                backgroundColor: "black",
                borderRadius: 50,
                marginBottom: 10,
              }}
            ></View>
          </View>
          <View style={{ minHeight: 12 }}></View>
          <View style={{ backgroundColor: "white" }}>
            <View
              style={{ marginVertical: 2, marginHorizontal: 20, marginTop: 10 }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
              >
                Select Size
              </Text>
            
            <View style={{flexDirection:'row' , justifyContent:'flex-start'}}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 3,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>28</Text>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>30</Text>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>32</Text>
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>34</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>36</Text>
            </View>

            <View
              style={{
                marginVertical:10,
                marginHorizontal: 5,
                width: 40,
                height: 40,
                borderTopWidth:0.5,
                borderTopColor:'#f0f0f0',
                borderLeftWidth:0.5,
                borderLeftColor:'#f0f0f0' ,
                borderBottomWidth:2,
                borderBottomColor:'#e3e3e3',
                borderRightWidth:2,
                borderRightColor:'#e3e3e3' ,
                marginBottom: 10,
                justifyContent:'center' ,
                alignItems:'center',
                borderRadius:5
              }}
            >
              <Text>38</Text>
            </View>
            </View>
            </View>
          </View>

          <View style={{ minHeight: 12 }}></View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 70,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              width: 60,
              height: 50,
              backgroundColor: "#f3f3f3",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <FontAwesome name="whatsapp" size={30} color="black" />
          </View>
          <View
            style={{
              width: 60,
              height: 50,
              backgroundColor: "#f3f3f3",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <EvilIcons name="heart" size={30} />
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home" , {data:data})}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#202020",
                marginHorizontal: 20,
                borderRadius: 4,
                justifyContent: "space-between",
                alignItems: "center",
                height: 50,
                paddingHorizontal: 40,
              }}
            >
              <AntDesign name="shoppingcart" size={25} color="#fbfbfb" />

              <Text style={{ color: "#fbfbfb" }}> Add To Bag</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
