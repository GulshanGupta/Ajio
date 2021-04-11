import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.lightblack,
    padding: 15,
    width: 200,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  safeareaview: { ...commonStyles.bgwhite, flex: 1 },
  flexten: { flex: 10 },
  headerContainer: { flex: 1, flexDirection: "row", alignItems: "center" },
  headerHeading: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 18,
    color: colors.blackshade,
  },
  middleContainer: {
    flex: 2.8,
    backgroundColor: colors.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  userimage: { width: 100, height: 100, borderRadius: 50 },
  userName: { color: colors.whiteShade, fontWeight: "bold" },
  bottomflexSix: { flex: 6 },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  horizontalLine: { height: 1, width: 400, backgroundColor: colors.greyShade },
});
