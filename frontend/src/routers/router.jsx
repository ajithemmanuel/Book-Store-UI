import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/home/books/CartPage";
import CheckOutPage from "../pages/home/books/CheckOutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/orders",
        element: <div>Oreders</div>
      },
      {
        path: "/about",
        element: <div>About</div>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
      {
        path: "/checkout",
        element: <CheckOutPage/>
      },
    ]
  },
]);

export default router;