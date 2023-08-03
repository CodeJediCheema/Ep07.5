import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";





const AppLayout = () =>{
    ;
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
        
    },
    {
        path:"/about",
        element: <About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);
