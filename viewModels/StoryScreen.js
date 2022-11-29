import { View } from "react-native";
import { VINData } from "../assets/strings";
import { ViewStyle } from "../assets/styles";
import { StoryText } from "../views/Labels";

export const StoryScreen = ({ navigation, route }) => {
  const carInfo = route.params.vehicle;
  const yearNum = parseFloat(carInfo[VINData.YEAR]);
  var plantLocation = carInfo[VINData.HOMESTATE]
    ? `${carInfo[VINData.HOMESTATE]}, `
    : ``;
  plantLocation += `${carInfo[VINData.HOMETOWN]}, ${carInfo[VINData.HOMELAND]}`;
  var fullName = `${yearNum} ${carInfo[VINData.MAKE]} ${
    carInfo[VINData.MODEL]
  }`;
  if (carInfo[VINData.TRIM] !== null) {
    fullName += ` ${carInfo[VINData.TRIM]}.`;
  } else if (carInfo[VINData.SERIES] !== null) {
    fullName += ` ${carInfo[VINData.SERIES]}.`;
  } else {
    fullName += `.`;
  }
  console.log();

  return (
    <View style={ViewStyle.container}>
      <StoryText
        text={`It all began in ${yearNum - 2}. A team of ${
          carInfo[VINData.MANUFACTURER]
        } engineers decided to try and do the impossible and improve on ${
          carInfo[VINData.MAKE]
        }'s reputation. They had to work quickly or they'd never finish by ${
          yearNum - 1
        }. But they did it.`}
      />
      <StoryText
        text={`It felt like no time at all before their designs were rushed to ${plantLocation} so construction could begin. Soon, she was rolling through the factory doors: the ${fullName}`}
      />
      <StoryText
        text={`She was beautiful with her ${carInfo[VINData.DOORS]} door, ${
          carInfo[VINData.CLASS]
        } frame and ${carInfo[VINData.CYLINDERS]} cylinder ${
          carInfo[VINData.FUELTYPE]
        } fed engine making her engine purr, she's a prime example of a ${
          carInfo[VINData.TYPE]
        }.`}
      />
      <StoryText
        text={`Is the ${yearNum} ${carInfo[VINData.MAKE]} ${
          carInfo[VINData.MODEL]
        } the car for you? Only you can say.`}
      />
    </View>
  );
};
