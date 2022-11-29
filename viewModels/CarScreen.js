import { useEffect, useState } from "react";
import * as Network from "expo-network";
import { View } from "react-native";
import { NavigationStrings, VINData } from "../assets/strings";
import { ViewStyle } from "../assets/styles";
import { fetchVehicle } from "../models/vinData";
import { PrimaryButton } from "../views/Buttons";
import { VINDetailLabel } from "../views/Labels";
import { WeakSignal } from "../views/Dialogs";

export const CarScreen = ({ navigation, route }) => {
  const [vehicle, setVehicle] = useState(null);
  const [enoughSignal, setEnoughSignal] = useState(true);
  const vin = route.params.vin;

  Network.getNetworkStateAsync().then((network) => {
    if (!network.isInternetReachable || !network.isConnected) {
      setEnoughSignal(false);
    }
  });

  useEffect(() => {
    if (vehicle === null) {
      fetchVehicle(vin, enoughSignal).then((data) => {
        if (data !== undefined) {
          setVehicle(data);
        }
      });
    }
  });

  if (vehicle !== null) {
    return (
      <View style={ViewStyle.container}>
        <VINDetailLabel title={`Year: ${vehicle[VINData.YEAR]}`} />
        <VINDetailLabel title={`Make: ${vehicle[VINData.MAKE]}`} />
        <VINDetailLabel title={`Model: ${vehicle[VINData.MODEL]}`} />
        {vehicle[VINData.TRIM] && (
          <VINDetailLabel title={`Trim: ${vehicle[VINData.TRIM]}`} />
        )}
        {vehicle[VINData.SERIES] && (
          <VINDetailLabel title={`Trim: ${vehicle[VINData.SERIES]}`} />
        )}
        <PrimaryButton
          navigation={() =>
            navigation.navigate(NavigationStrings.STORY, {
              vehicle: vehicle,
            })
          }
          title="Click here to read this vehicle's story."
        />
      </View>
    );
  } else {
    return (
      <View style={ViewStyle.container}>
        <WeakSignal
          visible={!enoughSignal}
          dismissDialog={() => setEnoughSignal(true)}
        />
        <VINDetailLabel title="No vehicle info at this time. Sorry." />
      </View>
    );
  }
};
