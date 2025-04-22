import { ToastContainer, Flip } from 'react-toastify';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer
        className="text-xs"
        position="bottom-right"
        autoClose={1500}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Flip}
      />
    </>
  );
};

export default ToastProvider;
