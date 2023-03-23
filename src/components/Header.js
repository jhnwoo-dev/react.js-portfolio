import React, { useState } from "react";
import Navigation from "./Navigation";

export const Header = () => {
    return (
        <header className="header">

            <a className="title-text" href="/">
                J.N.
            </a>

            <Navigation />

        </header>
    );
};

export default Header;
