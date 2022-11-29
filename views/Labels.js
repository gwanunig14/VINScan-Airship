import { Text } from "react-native";
import { TextStyles } from "../assets/styles";

export const VINDetailLabel = (props) => (
  <Text style={TextStyles.vinLabel}>{props.title}</Text>
);

export const VINScanDialogLabel = (props) => (
  <Text style={TextStyles.vinScanLabel}>{props.title}</Text>
);

export const StoryText = (props) => (
  <Text style={TextStyles.storyText}>{props.text}</Text>
);
