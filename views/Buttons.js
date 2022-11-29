import { Text, TouchableOpacity } from "react-native";
import { ButtonStyles, CellStyles, TextStyles } from "../assets/styles";

export const PrimaryButton = (props) => (
  <TouchableOpacity
    style={ButtonStyles.primaryButton}
    onPress={props.navigation}
  >
    <Text style={TextStyles.primaryButtonLabel}>{props.title}</Text>
  </TouchableOpacity>
);

export const DeleteButton = (props) => (
  <TouchableOpacity
    style={CellStyles.vinCellDeleteButton}
    onPress={props.delete}
  >
    <Text style={CellStyles.vinCellDeleteButtonText}>Delete</Text>
  </TouchableOpacity>
);
