import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabItems = [
        { path: "/home", key: "home", text: "Home" },
        { path: "/about", key: "about", text: "About" },
        { path: "/services", key: "services", text: "Services" },
        { path: "/contact", key: "contact", text: "Contact Us" }
    ];

    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const currentTab = tabItems.find(tab => location.pathname.includes(tab.path));
        if (currentTab) {
            setActiveTab(currentTab.key);
        }
    }, [location.pathname]);

    const handleTabClick = (tabKey, path) => {
        setActiveTab(tabKey);
        navigate(path);
    };

    return (
        <div className='logo-top-nav-cont'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='top-nav-content'>
                {tabItems.map(({ key, text, path }) => (
                    <div key={key}
                        className={`nav-content-text ${activeTab === key ? 'active' : 'inactive'}`}
                        onClick={() => handleTabClick(key, path)}
                    >
                        {text}
                        {activeTab === key && <Icon path={mdiChevronDown} size={1} style={{ marginTop: "2px" }} />}
                    </div>
                ))}
            </div>
            <div style={{ marginRight: "40px" }}>
                <button className='button button-sm'>
                    Request A Quote
                </button>
            </div>
        </div>
    );
};

export default TopNav;
