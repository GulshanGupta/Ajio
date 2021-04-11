import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  safeareaview: { flex: 1, backgroundColor: colors.white },
  headerContainer: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerHeading: { marginRight: 200, fontWeight: "bold" },
  flatlistContainer: { flex: 1, backgroundColor: colors.backgroundColor },
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
  marginhorizontalten: { marginHorizontal: 10 },
  footerpadding: { paddingBottom: 40 },
  heightfifty: { height: 50 },
  name: { color: colors.black, fontWeight: "bold" },
  email: { color: colors.black_api },
});
