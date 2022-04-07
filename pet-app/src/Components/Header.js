import React, {Component} from "react";
import {NavItems} from "./NavItems";
import "../Styles/navbar.css";
import {Button} from "./Button";

export default class Header extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked});
    }

    render() {
    return (
        <div>
            <nav className="navbar-items">
                <h1 className="navbar-logo">Adopt a Pet</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                            </a></li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        </div>
    )}
}