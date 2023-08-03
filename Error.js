import { useRouteError } from "react-router-dom"; // React-router-dom gives us some cool functionality. An important HOOK.By this we can get more details about the error(nature of error)

const Error = () =>{
    const err = useRouteError();
    console.log(err);// it will give us all the details of the error like status, statustext, etc etc
    return(
        <div className="error-container">
            <div className="error">
                <h1>OOPS!!!</h1>
                
                <h2>Error {err.status} {err.statusText}</h2>
                <h2>{err.error.message}</h2> // here we can display them according to our needs
            </div>
        </div>
    )
}

export default Error;
