import React, { useState } from "react";
import Navigation from "./Navigation";

export const Header = () => {
    return (
        <div className="header">
            <h1 className="title-text">Jason Nguyen</h1>
            <Navigation />
        </div>
    );
};

export default Header;
