import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// import Toastify from 'toastify-js'

// const toastObj = {
//   duration: 5000,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "right", // `left`, `center` or `right`
//   stopOnFocus: true,
// }
const handleSuccess = (info, type) => {
    toast.success(info, {
        position: toast.POSITION.TOP_RIGHT
    });
};

// const handleInfo = (info) => {

//   Toastify({
//     text: info,
//     backgroundColor: "#144284",
//     ...toastObj
//   }).showToast();

// };

// const handleWarning = (info) => {

//   Toastify({
//     text: info,
//     backgroundColor: "#f1c40f",
//     ...toastObj
//   }).showToast();

// };

const handleError = (info) => {
    toast.error(info, {
        position: toast.POSITION.TOP_RIGHT
    });

};

export {
  handleError,handleSuccess,
};
