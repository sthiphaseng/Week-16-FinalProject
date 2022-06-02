import React from "react";
import Drops from "./drops"
import Home from "./home"
import NavBar from "./navbar";
import News from "./news";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default class Container extends React.Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/drops" element={<Drops />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
            </Router>   
        )
    }
}