import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieDetail from "./pages/MovieDetail";
import CastDetail from "./pages/CastDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/PageTransition";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <SearchResults /> },
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
