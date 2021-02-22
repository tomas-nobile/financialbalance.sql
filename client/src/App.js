import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Auth from "./pages/Auth";
import Navigation from "./routes/Navigation";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {!auth ? <Auth /> : <Navigation />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
