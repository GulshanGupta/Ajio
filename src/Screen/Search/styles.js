import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  textInput: {
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
    width: 200,
    maxHeight: 50,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  inputField: {
    padding: 8,
  },
  safeareaview: { flex: 1, backgroundColor: colors.white },
  navbar: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text_search: { marginRight: 200, fontWeight: "bold" },
  top_portion: {
    flex: 0.3,
    flexDirection: "column",
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
  },
  bottom_portion: { flex: 0.8, backgroundColor: colors.backgroundColor },
  flexOne: { flex: 1 },
  searchContainer: { flexDirection: "row", justifyContent: "center" },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: colors.white,
    minHeight: 150,
    borderRadius: 10,
  },
  imageContainer: { flex: 3, justifyContent: "center" },
  image: {
    width: 90,
    height: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  marginhorizontalTen: { marginHorizontal: 10 },
  textStyle: { color: colors.black, fontWeight: "bold" },
});
