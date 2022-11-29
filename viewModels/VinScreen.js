import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TableView } from "react-native-tableview-simple";
import { NavigationStrings } from "../assets/strings";
import { CellStyle, ViewStyle } from "../assets/styles";
import { fetchVINs } from "../models/vinData";
import { VINCell } from "../views/Cells";

export const VinScreen = ({ navigation }) => {
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
      {vins !== null && (
        <TableView style={CellStyle.vinTableViewStyle}>
          {vins.map((vin, i) => (
            <VINCell
              title={vin}
              key={i}
              navigation={() =>
                navigation.navigate(NavigationStrings.CAR, { vin: vin })
              }
            />
          ))}
        </TableView>
      )}
    </View>
  );
};
