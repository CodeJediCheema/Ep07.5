import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //It is a library which is used to Route inside our react app.
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
// It takes a list of paths {an object}, which contains the information .
const appRouter = createBrowserRouter([
    { // If the path is /, then load AppLayout
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/> // If the path is any random word, or which s not defined then load the Error
        
    },
    { // If the path is /about , then load About
        path:"/about",
        element: <About/>
    },
    {
        // If the path is /contact, then load Contact
        path:"/contact",
        element:<Contact/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>); // RouterProvider provides the routing configuration to our app.

