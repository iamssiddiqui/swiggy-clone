import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"))

const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/Instamart",
                element:(
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense> 
                ) 
            },
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);