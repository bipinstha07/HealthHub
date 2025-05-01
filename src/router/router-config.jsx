import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Clinics from "../sections/clinics";
import Doctor from "../sections/doctors";
import LiveDoctor from "../sections/live-doctor";
import Book from "../sections/book";

const routerObj = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/clinics',
        element:<Clinics/>
    },

    {
        path:'/doctor',
        element:<Doctor/>,
  
    },
    {
        path:'/doctor/book',
        element:<Book/>
    },
    {
        path:'/live',
        element:<LiveDoctor/>
    }
    
])

const RouterConfig = ()=>{
    return(
        <>
        <RouterProvider router={routerObj}/>
        </>
    )
}
export default RouterConfig;