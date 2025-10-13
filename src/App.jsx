import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import { createBrowserRouter, Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieDetail from "./pages/MovieDetail";
import CastDetail from "./pages/CastDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/cast/:castId",
        element: <CastDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default App;
