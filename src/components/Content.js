import React, { useState } from "react";
export default function Content(props) {
    if (props.pageToShow === "home") {
        return (location.href = "./components/home");
    }
    if (props.pageToShow === "about-me") {
        return (location.href = "./components/AboutMe");
    }
    if (props.pageToShow === "contact") {
        return (location.href = "./components/Contact");
    }
    if (props.pageToShow === "portfolio") {
        return (location.href = "./components/Portfolio");
    }
    if (props.pageToShow === "resume") {
        return (location.href = "./components/Resume");
    }
}
