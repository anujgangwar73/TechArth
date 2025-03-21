import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiClose, mdiMenuOpen, mdiMenuClose } from "@mdi/js";

const TopNav = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tabItems = [
        { path: "/home", key: "home", text: "Home" },
        { path: "/about", key: "about", text: "About" },
        { path: "/services", key: "services", text: "Services" },
        { path: "/contact", key: "contact", text: "Contact Us" },
    ];

    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const currentTab = tabItems.find((tab) => location.pathname.includes(tab.path));
        if (currentTab) {
            setActiveTab(currentTab.key);
        }
    }, [location.pathname]);

    const handleTabClick = (tabKey, path) => {
        setActiveTab(tabKey);
        navigate(path);
        setIsSidebarOpen(false);
    };

    return (
        <div className="logo-top-nav-cont">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="menu-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {!isSidebarOpen ? <Icon path={mdiMenuOpen} size={2} color={"#2D6C80"} /> :
                    <Icon path={mdiMenuClose} size={2} color={"#2D6C80"} />}
            </div>

            {/* Sidebar for Mobile View */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo" tabIndex={"-1"}>
                        <img src={logo} alt="Logo" tabIndex={"-1"} />
                    </div>
                    <div className="close-icon" onClick={() => setIsSidebarOpen(false)}>
                        <Icon path={mdiClose} size={1.5} color={"#2D6C80"} />
                    </div>
                </div>

                {/* Sidebar Navigation Links */}
                <div className="sidebar-content">
                    {tabItems.map(({ key, text, path }) => (
                        <div
                            key={key}
                            className={`nav-content-text ${activeTab === key ? "active" : "inactive"}`}
                            onClick={() => handleTabClick(key, path)}
                        >
                            {text}
                        </div>
                    ))}
                    {/* Button in Sidebar */}
                    <button
                        onClick={() => { navigate("/contact") }}
                        className="button"
                    >
                        Request A Quote
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="top-nav-content">
                {tabItems.map(({ key, text, path }) => (
                    <div
                        key={key}
                        className={`nav-content-text ${activeTab === key ? "active" : "inactive"}`}
                        onClick={() => handleTabClick(key, path)}
                    >
                        {text}
                        {activeTab === key && <Icon path={mdiChevronDown} size={1} />}
                    </div>
                ))}
            </div>

            {/* Desktop Button */}
            <div className="nav-button">
                <button
                    onClick={() => { navigate("/contact") }}
                    className="button button-sm"
                >
                    Got Any Questions
                </button>
            </div>
        </div>
    );
};

export default TopNav;
