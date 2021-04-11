import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  safeareaview: { flex: 1 },
  headerContainer: {
    ...commonStyles.bgwhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 60,
  },
  flexStart: { flexDirection: "row", justifyContent: "flex-start" },
  marginhfifteen: { marginHorizontal: 15 },
  spacearound: { flexDirection: "row", justifyContent: "space-around" },
  marginhTen: { marginHorizontal: 10 },
  cartQuantity: { color: colors.red, fontWeight: "bold" },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  bgWhite: { ...commonStyles.bgwhite },
  nameContainer: { marginVertical: 2, marginHorizontal: 20, marginTop: 10 },
  name: { color: colors.blackOpacity86, fontWeight: "bold", fontSize: 16 },
  textContainer: { marginVertical: 2, marginHorizontal: 20 },
  text: { color: colors.greyOpacity60 },
  priceContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
  },
  reducedPrice: {
    color: colors.reduced_price,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  originalPrice: {
    color: colors.originalPrice,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    margin: 2,
    marginHorizontal: 10,
  },
  discount: {
    color: colors.discount,
    margin: 2,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  marginbTen: { marginBottom: 10 },
  tax: {
    color: colors.blackOpacity86,
    margin: 2,
    fontSize: 12,
    marginHorizontal: 20,
  },
  heightTwelve: { minHeight: 12 },
  blackCircle: {
    marginVertical: 2,
    marginHorizontal: 20,
    width: 40,
    height: 40,
    backgroundColor: colors.blackOpacity86,
    borderRadius: 50,
    marginBottom: 10,
  },
  sizeContainer: { flexDirection: "row", justifyContent: "flex-start" },
  size: {
    marginVertical: 10,
    marginHorizontal: 3,
    width: 40,
    height: 40,
    borderTopWidth: 0.5,
    borderTopColor: colors.greyOpacity10,
    borderLeftWidth: 0.5,
    borderLeftColor: colors.greyOpacity10,
    borderBottomWidth: 2,
    borderBottomColor: colors.greyOpacity80,
    borderRightWidth: 2,
    borderRightColor: colors.greyOpacity80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  footerContainer: {
    ...commonStyles.bgwhite,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
  },
  iconContainer: {
    width: 60,
    height: 50,
    backgroundColor: colors.greyOpacity70,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  addToBagButton: {
    flexDirection: "row",
    backgroundColor: colors.lightblack,
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 40,
  },
  textColor: { color: colors.lightwhite },
});
