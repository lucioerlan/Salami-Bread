import { StyledToastContainer } from './styled';

const Toast = () => (
    <StyledToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

export default Toast;
