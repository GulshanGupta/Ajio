import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  mainView: { marginVertical: 20 },
  insidemainView: { marginVertical: 10 },
  forphoneNumber: {
    flexDirection: "row",
    marginHorizontal: 30,
    alignItems: "center",
    marginVertical: 10,
  },
  indianCode: {
    color: colors.grey_indian_code,
    fontSize: 20,
    fontWeight: "bold",
  },
  mobileNumber: {
    color: colors.grey_mobile_no,
    fontSize: 15,
    marginHorizontal: 10,
  },
  forhorizontalLine: {
    height: 2,
    width: 300,
    marginHorizontal: 30,
    backgroundColor: colors.blue_landing_page,
  },
  insuranceOrCorporateView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.blueOpacity50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  insuranceOrCorporateText: { color: colors.blueOpacity50, margin: 8 },
  forImage: { width: 15, height: 10, tintColor: colors.blueOpacity50 },
  termsAndConditionView: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  termsText: { fontSize: 12, color: colors.blackOpacity80 },
  conditionText: { fontSize: 12, color: colors.blueOpacity20 },
});
