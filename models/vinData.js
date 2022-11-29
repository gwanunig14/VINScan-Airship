import AsyncStorage from "@react-native-async-storage/async-storage";
import { VINData } from "../assets/strings";

export const fetchVINs = async () => {
  try {
    const vins = await fetchFromLocalData("vins").then((v) => {
      return v;
    });
    return vins;
  } catch (e) {
    console.log(e);
  }
};

export const fetchVehicle = async (vin, enoughSignal) => {
  try {
    const vehicle = await fetchFromLocalData(vin).then(async (data) => {
      if (data !== null) {
        return data;
      } else if (enoughSignal) {
        data = await pullVehicle(vin).then((d) => {
          return d;
        });
        if (data === null) return null;
        return buildCar(vin, data);
      } else {
        return null;
      }
    });
    return vehicle;
  } catch (e) {
    console.log(e);
  }
};

const fetchFromLocalData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key).then((d) => {
      return d;
    });
    return data === null ? null : JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
};

const pullVehicle = async (vin) => {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`;
  try {
    const vehicle = await fetch(url).then(async (res) => {
      const response = await res.json().then((data) => {
        return data ? data.Results : null;
      });
      return response === null ? null : response;
    });
    return vehicle;
  } catch (e) {
    console.log(e);
  }
};

const buildCar = (vin, vehicle) => {
  const carItems = Object.values(VINData);
  const newCar = {};

  vehicle.forEach((carInfo) => {
    if (carItems.indexOf(carInfo.Variable) !== -1) {
      newCar[carInfo.Variable] = carInfo.Value;
    }
  });
  saveToLocalData(vin, newCar);
  return newCar;
};

export const saveVIN = async (vin) => {
  try {
    var vins = await fetchVINs();
    if (vins !== null) {
      if (vins.indexOf(vin) === -1) vins.push(vin);
    } else {
      vins = [vin];
    }
    await saveToLocalData("vins", vins);
  } catch (e) {
    console.log(e);
  }
};

const saveToLocalData = async (key, value) => {
  try {
    const newValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, newValue);
  } catch (e) {
    console.log(e);
  }
};
