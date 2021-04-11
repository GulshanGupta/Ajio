import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  dpLogo: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  chatRow: {
    flex: 10,
    flexDirection: "row",
    margin: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  dp: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  nameHeading: {
    flex: 7.5,
    justifyContent: "center",
    borderBottomColor: colors.greyOpacity15,
    borderBottomWidth: 0.2,
  },
  freeSpace: {
    flex: 0.5,
  },
  firstLineinnameHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex_one: { flex: 1 },
});
