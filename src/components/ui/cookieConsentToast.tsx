import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CookieConsentToast: React.FC = () => {
  useEffect(() => {
    toast.info("We use cookies to ensure you get the best experience on our website.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default CookieConsentToast;
