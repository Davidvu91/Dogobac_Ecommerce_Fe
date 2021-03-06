import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
      />
    </div>
  );
};

export default Toastify;
