import ReactDOM from "react-dom/client";
import Home from "./components/Home";
require("dotenv").config();

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
