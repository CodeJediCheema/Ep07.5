import { LOGO_URL } from "./utils/constants";
import { useState, useEffect } from "react";

const Header = () =>{
    const [btnName, setbtnName] = useState("Login");
    console.log("Header rendered");
    /* 
    Case- 1) Whenever useEffect is called without a dependency array, it'll be called everytime our component renders.
    Case- 2) When we give an empty dependency array [], then it will be only called on initial render and only once.
    Case- 3) When we give some value in the dependency array, then it will be called only when the dependency changes.
    For example, [btnName], when we click on login/logout button, btnName changes
    In other words, dependency changes
    As a result, useEffect will be called*/
    useEffect(()=>{
        console.log("Use effect called");
    },[btnName]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>

            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        
                    }}> {btnName}</button>
                </ul>

            </div>
        </div>
        
    )
};

export default Header;