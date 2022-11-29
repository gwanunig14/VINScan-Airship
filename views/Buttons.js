import { Text, TouchableOpacity } from "react-native";
import { ButtonStyles, TextStyles } from "../assets/styles";

export const PrimaryButton = (props) => (
  <TouchableOpacity
    style={ButtonStyles.primaryButton}
    onPress={props.navigation}
  >
    <Text style={TextStyles.primaryButtonLabel}>{props.title}</Text>
  </TouchableOpacity>
);
