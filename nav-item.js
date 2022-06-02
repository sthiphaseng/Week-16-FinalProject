import React from "react";

export default class NavItem extends React.Component {
    render() {
        return(
            <li className="nav-item">{this.props.link}</li>
        )
    }
}