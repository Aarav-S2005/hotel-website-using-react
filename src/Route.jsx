import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import Page404 from "./pages/Page404.jsx";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/booking", element: <Booking /> },
    { path: "*", element: <Page404 /> }
]);

export default router;