import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import { createBrowserRouter, Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieDetail from "./pages/MovieDetail";
import CastDetail from "./pages/CastDetail";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
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
    ],
  },
]);
