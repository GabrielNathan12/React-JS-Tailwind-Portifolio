import React from "react";
import logo from '../assets/logo.png';

const Header = () =>{
    return (
    <header className="py-8 ">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                {/* Logo */ }
                <a href="#">
                    <img src={logo} alt="" width="80px" />
                </a>
                <button className="btn btn-sm">Meus Trabalhos</button>
            </div>
        </div>
    </header>
    )
}

export default Header;