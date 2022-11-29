import { TouchableOpacity, Text } from "react-native";
import { CellStyle, textStyle } from "../assets/styles";

export const VINCell = (props) => (
  <TouchableOpacity onPress={props.navigation} style={CellStyle.vinCell}>
    <Text style={textStyle.vinCellTitle}>{props.title}</Text>
  </TouchableOpacity>
);
