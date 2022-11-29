import Dialog, {
  DialogButton,
  DialogContent,
  DialogFooter,
} from "react-native-popup-dialog";
import { VINScanDialogLabel } from "./Labels";

export const CorrectScanDialog = (props) => (
  <MasterDialog
    title={`VIN has been scanned. ${props.vin}`}
    visible={props.visible}
    footer={
      <DialogFooter>
        <DialogButton text="Rescan" onPress={props.dismissDialog} />
        <DialogButton text="Save For Later" onPress={props.saveScannedVin} />
        <DialogButton text="Get Car Info" onPress={props.getCarInfo} />
      </DialogFooter>
    }
  />
);

export const IncorrectScanDialog = (props) => {
  if (props.vin === null) {
    return;
  }
  var lengthMessage =
    props.vin.length > 17
      ? "longer than 17 characters and not a valid VIN."
      : "less than 17 characters not a valid VIN.";
  return (
    <MasterDialog
      title={`The scanned number, ${props.vin}, is ${lengthMessage} \nWhat would you like to do?`}
      visible={props.visible}
      footer={
        <DialogFooter>
          <DialogButton text="Try again" onPress={props.dismissDialog} />
          <DialogButton text="Edit VIN" onPress={props.editVin} />
        </DialogFooter>
      }
    />
  );
};

export const WeakSignal = (props) => (
  <MasterDialog
    title={
      "Your cell signal is too weak to access the VIN database. Please try again later."
    }
    visible={props.visible}
    footer={
      <DialogFooter>
        <DialogButton text="Okay" onPress={props.dismissDialog} />
        <DialogButton text="Saved VIN List" onPress={props.VINList} />
      </DialogFooter>
    }
  />
);

export const DeleteDialog = (props) => (
  <MasterDialog
    title={`Are you sure you want to delete VIN ${props.vin}?`}
    visible={props.visible}
    footer={
      <DialogFooter>
        <DialogButton text="Yes" onPress={props.delete} />
        <DialogButton text="No" onPress={props.dismissDialog} />
      </DialogFooter>
    }
  />
);
const MasterDialog = (props) => (
  <Dialog footer={props.footer} visible={props.visible}>
    <DialogContent>
      <VINScanDialogLabel title={props.title} />
    </DialogContent>
  </Dialog>
);
