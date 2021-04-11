import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 25,
    minHeight: "90%",
    minWidth: "80%",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  buttonClose: {
    backgroundColor: colors.buttonColor,
  },
  textStyle: {
    color: colors.white,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.black,
  },
  blueBackground: {
    flex: 1,
    backgroundColor: colors.modal_bg_color,
    padding: 30,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
  },
  headingView: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headingText: { fontSize: 18, color: colors.black },
  flexRow: { flexDirection: "row" },
  textinputView: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  textinput: {
    color: colors.grey_mobile_no,
    fontSize: 15,
    marginHorizontal: 10,
  },
  buttonStyle: { flexDirection: "row", justifyContent: "flex-end" },
});
