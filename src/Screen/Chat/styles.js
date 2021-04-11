import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  messgeTextInput: {
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS == "ios" ? 10 : undefined,
    borderRadius: 50,
    paddingHorizontal: 20,
    textAlignVertical: "center",
    alignSelf: "center",
  },
  flexOne: { flex: 1 },
});
