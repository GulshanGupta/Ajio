import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";
import Formbutton from "../../Component/Formbutton";
import Inputtext from "../../Component/Inputtext";
import fontFamily from "../../styles/fontFamily";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderEmail:"Enter Mobile Number/Email"
    };
  }

  onPress = () => {
    this.props.navigation.navigate("tabRoutes");
  };

  // const [loaded] = useFonts({
  //   Montserrat: require('./assets/fonts/Montserrat.ttf'),
  // });
  
  // if (!loaded) {
  //   return null;
  // }

  render() {

    const{ placeholderEmail } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.loginScreen}>
          <View style={styles.forFlex}>
            <Image
              style={styles.ajioLogo}
              source={{
                uri:
                  "data:image/png;base64,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",
              }}
            />
            <Text
              style={{  fontSize: 20, color: "#0c0c0c" , fontFamily:fontFamily.regular }}
            >
              Welcome to AJIO
            </Text>
          </View>
          <View style={styles.forForm}>
            <Inputtext placeholder={placeholderEmail}/>
            <Formbutton onPress={this.onPress} />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
            >
              <Text style={{ color: "#b1b1b1" }}>
                Don't Have an Account?
                <Text style={{ color: "#3c88a8" }}> SignUp Here</Text>
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <View
                style={{ height: 1, width: 60, backgroundColor: "#a1a1a1" }}
              ></View>
              <Text style={{ color: "#a1a1a1" }}> or </Text>

              <View
                style={{ height: 1, width: 60, backgroundColor: "#a1a1a1" }}
              ></View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
              style={styles.fbbuttonStyle}
            >
              <Image
                style={styles.fbLogo}
                source={{
                  uri:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC",
                }}
              />

              <Text style={{ color: "#202020", fontWeight: "bold" }}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
              style={styles.googlebuttonStyle}
            >
              <Image
                style={styles.googleLogo}
                source={{
                  uri:
                    "data:image/png;base64,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",
                }}
              />

              <Text style={{ color: "#202020", fontWeight: "bold" }}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  forFlex: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  ajioLogo: {
    width: 80,
    height: 80,
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  forForm: {
    flex: 0.6,
    alignItems: "center",
  },
  orThing: {
    flexDirection: "row",
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fbbuttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  googlebuttonStyle: {
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
});
