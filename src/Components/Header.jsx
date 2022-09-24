import React, { useEffect, useState } from "react";
import sitelogo from '../Assets/images/sitelogo.png';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 2);
        });
    }, []);
    return (
        <>
            <div className={scroll ? "topnav header_scroll" : "topnav"}>
                <div className="container-wrapper">
                    <div className='header_wraper'>
                    <Navbar collapseOnSelect expand="xl" expanded={expanded}>
                            <div className='logo'>
                                <a href="/#home"><img src={sitelogo} alt="sitelogo" /></a>
                            </div>
                            <div className='nav-wraper'>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="btnMemu" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className='me-auto' onClick={() => setExpanded(false)} >
                                        <a href='#home'>Home</a>
                                        <a href='#about'>About Us</a>
                                        <a href='#roadmap'>Road map</a>
                                        <a href='#team'>Team</a>
                                        <button className='cont-btn btn_gradient'>Connect Wallet</button>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Header;