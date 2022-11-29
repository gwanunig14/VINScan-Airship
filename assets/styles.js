import { StyleSheet } from "react-native";

export const ViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    padding: 16,
    width: "100%",
  },
});

export const ButtonStyles = StyleSheet.create({
  primaryButton: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
    height: 80,
    justifyContent: "center",
    borderRadius: 8,
    marginTop: "10%",
    marginBottom: "10%",
  },
});

export const CellStyles = StyleSheet.create({
  vinTableViewStyle: {
    width: "110%",
    marginStart: -16,
  },
  vinCell: {
    width: "100%",
    height: 80,
    alignItems: "right",
    borderBottomWidth: 2,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
  },
  vinCellDeleteButton: {
    height: "80%",
    backgroundColor: "red",
    width: 100,
    borderRadius: 8,
    marginEnd: 16,
    marginTop: 8,
    justifyContent: "center",
  },
  vinCellDeleteButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});

export const TextStyles = StyleSheet.create({
  primaryButtonLabel: { color: "white", fontSize: 24, textAlign: "center" },
  vinCellTitle: {
    color: "red",
    fontSize: 24,
    textAlign: "left",
    marginTop: 8,
    padding: 16,
    flex: 1,
  },
  vinLabel: { color: "red", marginBottom: 8, fontSize: 24 },
  vinScanLabel: {
    color: "red",
    marginBottom: 8,
    fontSize: 20,
    textAlign: "center",
    paddingTop: 32,
    lineHeight: 32,
  },
  storyText: { fontSize: 24, lineHeight: 24, marginBottom: 8 },
  vinEditText: {
    fontSize: 24,
    backgroundColor: "gainsboro",
    height: 80,
    padding: 16,
    borderRadius: 8,
  },
});
