import { toast } from "react-toastify";

export const showToast = (error, message) => {

  switch (error) {
    case "SUCCESS":
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "ERROR":
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    default:
      return false;
  }
};
