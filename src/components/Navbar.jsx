import React, { useEffect, useState } from "react";
import "./Navbar.css";
import down from "../assets/down.jpg"
import logo from "../assets/logo.jpg"
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import girl3 from "../assets/girl3.png";
import data from "../components/data.json";
import Result from "./result";

function Navbar() {
    const [search, setSearch] = useState("");
    const [show,setShow]= useState(false)

    return (
        
        <div className="top-page">
            
            <div className="topbar">
                <div className="menu-items">
                    <ul>
                        <li><img src={logo} /></li>
                        <li>Solutions<img src={down} /></li>
                        <li>Features <img src={down} /></li>
                        <li>Blogs <img src={down} /></li>
                        <li>About <img src={down} /></li>
                    </ul>
                </div>
                <div className="buttons">
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                </div>
            </div>
            <div className="header-contents">
                <div className="heading">
                    Find  Partners (CAs) available online
                    <p>CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    <div className="input">
                        <input placeholder="search..."
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }} />
                        <button>Search</button>
                        <div>
                            {data.filter((v) => {
                                if (search === "") {
                                    return ;
                                } else if (
                                    v.name.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return v;
                                }
                            }).map((val, key) => {
                                return (
                                    <div className="user" key={key}>
                                        <p onClick={()=>setShow(!show)}>{val.name}</p>
                                        {
                                            show?<Result name={val.name}/> :""
                                        }
                                        
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>

                <div className="picture">

                    <img src={girl1} />
                    <img src={girl2} className="picture2" />
                    <img src={girl3} className="picture3" />
                </div>


            </div>
        </div>
    )
}
export default Navbar;