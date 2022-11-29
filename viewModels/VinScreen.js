import { useEffect, useState } from "react";
import { View } from "react-native";
import { TableView } from "react-native-tableview-simple";
import { NavigationStrings } from "../assets/strings";
import { CellStyles, ViewStyle } from "../assets/styles";
import { fetchVINs, removeVehicle, saveToLocalData } from "../models/vinData";
import { VINCell } from "../views/Cells";
import { DeleteDialog } from "../views/Dialogs";

export const VinScreen = ({ navigation }) => {
  const [vins, setVins] = useState(null);
  const [selectedVIN, setSelectedVIN] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (vins === null) {
      fetchVINs().then((data) => {
        setVins(data);
      });
    }
  });

  const deletePressed = (vin) => {
    setSelectedVIN(vin);
    setShowDelete(true);
  };

  const dismissDialog = () => {
    setSelectedVIN("");
    setShowDelete(false);
  };

  const deleteVIN = () => {
    removeVehicle(selectedVIN);
    var newVINs = vins;
    newVINs.splice(vins.indexOf(selectedVIN), 1);
    setVins(newVINs);
    saveToLocalData("vins", newVINs);
    setSelectedVIN("");
    setShowDelete(false);
  };

  return (
    <View style={ViewStyle.container}>
      {vins !== null && (
        <>
          <DeleteDialog
            visible={showDelete}
            vin={selectedVIN}
            delete={deleteVIN}
            dismissDialog={dismissDialog}
          />
          <TableView style={CellStyles.vinTableViewStyle}>
            {vins.map((vin, i) => (
              <VINCell
                title={vin}
                key={i}
                navigation={() =>
                  navigation.navigate(NavigationStrings.CAR, { vin: vin })
                }
                delete={() => deletePressed(vin)}
              />
            ))}
          </TableView>
        </>
      )}
    </View>
  );
};
