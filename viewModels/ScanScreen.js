import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Keyboard } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { saveVIN } from "../models/vinData";
import { NavigationStrings } from "../assets/strings";
import { textStyle, ViewStyle } from "../assets/styles";
import { CorrectScanDialog, IncorrectScanDialog } from "../views/Dialogs";
import { PrimaryButton } from "../views/Buttons";

export const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [correctVin, setCorrectVin] = useState(false);
  const [incorrectVin, setIncorrectVin] = useState(false);
  const [showEditVin, setShowEditVin] = useState(false);
  const [currentVin, setCurrentVin] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    handleVIN(data);
  };

  const handleVIN = (data) => {
    if (data.length === 17) {
      setCorrectVin(true);
    } else {
      setIncorrectVin(true);
    }
    setCurrentVin(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const dismissDialog = () => {
    setCorrectVin(false);
    setIncorrectVin(false);
  };

  const saveScannedVin = () => {
    saveVIN(currentVin).then(() => {
      dismissDialog();
      navigation.navigate(NavigationStrings.VIN);
    });
  };

  const getCarInfo = () => {
    saveVIN(currentVin).then(() => {
      dismissDialog();
      navigation.navigate(NavigationStrings.CAR, { vin: currentVin });
    });
  };

  const editVin = () => {
    dismissDialog();
    setShowEditVin(true);
  };

  return (
    <View style={ViewStyle.container}>
      {showEditVin ? (
        //This deserves some explanation. All day I was using the random VIN generator. Then I decided to test it on my car and for some reason, it add an I to the beggining everytime. So I figured I needed to create a workaround in case of incorrect reads. I didn't want to make a whole new window just for that, so I decided the best idea would be to hide the scanner and show the text input.
        <View style={{ width: "100%" }}>
          <TextInput
            defaultValue={currentVin}
            onChangeText={(newText) => setCurrentVin(newText)}
            style={textStyle.vinEditText}
          />
          <PrimaryButton
            title={"Fixed"}
            navigation={() => {
              Keyboard.dismiss();
              handleVIN(currentVin);
            }}
          />
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={currentVin ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <CorrectScanDialog
        vin={currentVin}
        dismissDialog={dismissDialog}
        saveScannedVin={saveScannedVin}
        getCarInfo={getCarInfo}
        visible={correctVin}
      />
      <IncorrectScanDialog
        vin={currentVin}
        dismissDialog={dismissDialog}
        editVin={editVin}
        visible={incorrectVin}
      />
    </View>
  );
};
