import { Text } from "react-native";
import { textStyle } from "../assets/styles";

export const VINDetailLabel = (props) => (
  <Text style={textStyle.vinLabel}>{props.title}</Text>
);

export const VINScanDialogLabel = (props) => (
  <Text style={textStyle.vinScanLabel}>{props.title}</Text>
);

export const StoryText = (props) => (
  <Text style={textStyle.storyText}>{props.text}</Text>
);
