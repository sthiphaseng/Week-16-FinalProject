import React from "react";
import NavItem from "./nav-item";
import { Link } from 'react-router-dom'

export default function Navbar (props) {
    return(
        <nav className="navbar navbar-expand-lg text-white bg-muted">
            SoLeFuLL <img src="https://ctl.s6img.com/society6/img/6WbubdjCkb3zFnlc8-J1NKZalDw/h_264,w_264/prints/~artwork/s6-0025/a/11555687_10461550/~~/air-jordan-retro-1s-prints.jpg" width="40" height="40" alt=""></img>
                <ul className="navbar-nav mx-auto px-5">
                    <Link to="/"><NavItem link={". . . HOME-BASE . . ."}/></Link><img src="https://www.creativefabrica.com/wp-content/uploads/2020/05/16/Shoes-Line-Art-Graphics-4136626-1-1-580x386.jpg" width="40" height="40" alt=""></img>
                    <Link to="/drops"><NavItem link={". . . SNEAKER-DROPS . . . "}/></Link><img src="https://www.creativefabrica.com/wp-content/uploads/2020/05/16/Shoes-Line-Art-Graphics-4136626-1-1-580x386.jpg" width="40" height="40" alt=""></img>
                    <Link to="/news"><NavItem link={". . . SNEAKER-NEWS . . ."}/></Link>
                </ul>
        </nav>
    );
}