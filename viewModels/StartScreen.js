import { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationStrings } from "../assets/strings";
import { ViewStyle } from "../assets/styles";
import { fetchVINs } from "../models/vinData";
import { PrimaryButton } from "../views/Buttons";

export const StartScreen = ({ navigation }) => {
  const [vins, setVins] = useState(null);

  useEffect(() => {
    if (vins === null) {
      fetchVINs().then((data) => {
        setVins(data);
      });
    }
  });

  return (
    <View style={ViewStyle.container}>
      <PrimaryButton
        navigation={() => navigation.navigate(NavigationStrings.SCANNER)}
        title="Scan a VIN"
      />
      {vins !== null && (
        <PrimaryButton
          navigation={() => navigation.navigate(NavigationStrings.VIN)}
          title="Select Saved VIN"
        />
      )}
    </View>
  );
};
