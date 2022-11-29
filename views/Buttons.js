import { Text, TouchableOpacity } from "react-native";
import { ButtonStyle, textStyle } from "../assets/styles";

export const PrimaryButton = (props) => (
  <TouchableOpacity
    style={ButtonStyle.primaryButton}
    onPress={props.navigation}
  >
    <Text style={textStyle.primaryButtonLabel}>{props.title}</Text>
  </TouchableOpacity>
);
