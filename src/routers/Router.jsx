import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../components/home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])