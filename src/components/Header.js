import React, { useState } from "react";
import Navigation from "./Navigation";

export const Header = () => {
    return (
        <div className="header">
            <a className="title-text" href="/">
                Jason Nguyen
            </a>
            <Navigation />
        </div>
    );
};

export default Header;
