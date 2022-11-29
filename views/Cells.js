import { TouchableOpacity, Text } from "react-native";
import { CellStyles, TextStyles } from "../assets/styles";

export const VINCell = (props) => (
  <TouchableOpacity onPress={props.navigation} style={CellStyles.vinCell}>
    <Text style={TextStyles.vinCellTitle}>{props.title}</Text>
  </TouchableOpacity>
);
