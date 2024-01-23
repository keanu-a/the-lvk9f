import { Bounce, toast } from "react-toastify";

export default function displayToast() {
  toast.info("501(c)(3) status pending", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}
