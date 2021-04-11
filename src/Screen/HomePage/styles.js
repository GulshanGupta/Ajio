import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  forlogoHeading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: colors.white,
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
    backgroundColor: colors.backgroundColor,
    justifyContent: "space-around",
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 10,
  },
  productImage: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 5,
  },
  productNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  productNameTextStyle: { color: colors.product_name, fontWeight: "bold" },
  productDescContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  productTextColor: { color: colors.product_desc },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  reducedPrice: { color: colors.reduced_price, fontWeight: "bold" },
  originalPrice: {
    color: colors.originalPrice,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  discount: { color: colors.discount, fontWeight: "bold" },
  addtocart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
    marginHorizontal: 35,
    minHeight: 30,
  },
  flexOne: { flex: 1 },
  flexTen: { flex: 10 },
  ajioLogo: { width: 65, height: 65 },
  cartLength: { color: colors.red, fontWeight: "bold" },
  forFlatList: { flex: 7, backgroundColor: colors.white },
});
