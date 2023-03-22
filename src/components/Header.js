import React, { useState } from "react";
import Navigation from "./Navigation";

export const Header = () => {
    return (
        <div className="header">

            <a className="title-text" href="/">
                Welcome
            </a>

            <Navigation />

        </div>
    );
};

export default Header;
