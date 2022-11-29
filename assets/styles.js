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

export const ButtonStyle = StyleSheet.create({
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

export const CellStyle = StyleSheet.create({
  vinTableViewStyle: {
    width: "110%",
    marginStart: -16,
  },
  vinCell: {
    padding: 16,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "left",
    borderBottomWidth: 2,
    borderColor: "red",
  },
});

export const textStyle = StyleSheet.create({
  primaryButtonLabel: { color: "white", fontSize: 24, textAlign: "center" },
  vinCellTitle: { color: "red", fontSize: 24, textAlign: "center" },
  vinLabel: { color: "red", marginBottom: 8, fontSize: 24 },
  vinScanLabel: {
    color: "red",
    marginBottom: 8,
    fontSize: 20,
    textAlign: "center",
    paddingTop: 32,
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
