import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import SkillsPage from "../Pages/SkillsPage/SkillsPage";
import CareerPage from "../Pages/CareerPage/CareerPage";
import App from "../Components/Layout/App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "*", element: <ErrorPage /> },
            { path: "/", element: <HomePage /> },
            // { path: "home", element: <HomePage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "skills", element: <SkillsPage /> },
            { path: "career", element: <CareerPage /> },
        ]
    }
])