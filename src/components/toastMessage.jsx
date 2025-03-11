import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Spinner from "./Spinner"

const ToastMessage = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export const message = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(<div className="toast-inner-text">{msg}</div>);
      break;
    case "info":
      toast.info(<div className="toast-inner-text">{msg}</div>);
      break;
    case "warning":
      toast.warning(<div className="toast-inner-text">{msg}</div>);
      break;
    case "error":
      toast.error(<div className="toast-inner-text">{msg}</div>);
      break;
    case "promise":
      toast.promise(msg, {
        pending: {
          render() {
            return <div className="toast-inner-text">Downloading...</div>;
          },
          icon: <Spinner size="18" stroke="#ccc" />,
        },
        success: {
          render() {
            return <div className="toast-inner-text">Downloaded successfully</div>;
          },
          icon: true,
        },
        error: {
          render() {
            return <div className="toast-inner-text">Something went wrong.</div>;
          },
          icon: true,
        },
      });
      break;
    default:
      toast(<div className="toast-inner-text">{msg}</div>);
  }
};

export default ToastMessage
