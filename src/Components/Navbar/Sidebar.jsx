'use client'
import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu"
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import "./Navbar.css";

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const error = console.error;
    console.error = (...args) => {
        if (/defaultProps/.test(args[0])) return;
        error(...args);
    };

    return (
        <div className="sidebar" >
            <div className="logoContainer">
                <Image
                    src={'/assets/logo.svg'}
                    width={100}
                    height={100}
                    alt="logo"
                />
            </div>
            <Menu right isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)} disableOverlayClick width={'100%'}>
                <div className="sidelogo">
                    <Image
                        src={'/assets/logo.svg'}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </div>
                <div className="buttonContainer">
                    <div className="dropdown">
                        <button>
                            <span>
                                Products
                            </span>
                            <Image
                                className="NavBImg"
                                src={'/assets/v.png'}
                                width={13}
                                height={10}
                                alt="v" />
                        </button>
                        <div className="dropdownContent">
                            <Link href={'http://www.bitmemoir.com/'} target="blank">
                                <div className="drpItem">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">Bitmemoir</h4>
                                        <p className="drpDesc">Issue.Store.Verify.Retrieve</p>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={60}
                                        height={60}
                                        alt="drpimg" />
                                </div>
                            </Link>
                            <Link href={'https://www.thebitwallet.com/'} target="blank">
                                <div className="drpItem">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">BitWallet</h4>
                                        <p className="drpDesc">Your Secure Digital Wallet</p>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={60}
                                        height={60}
                                        alt="drpimg" />
                                </div>
                            </Link>
                            <Link href={'https://www.bitbhoomi.com/'} target="blank">
                                <div className="drpItem">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">BitBhoomi</h4>
                                        <p className="drpDesc">Where Technology Meets Sustainability</p>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={60}
                                        height={60}
                                        alt="drpimg" />
                                </div>
                            </Link>
                            <Link href={'https://bitdpp.com/'} target="blank">
                                <div className="drpItem">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">BITDPP</h4>
                                        <p className="drpDesc">The New-Age Digital Product Passport</p>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={60}
                                        height={60}
                                        alt="drpimg" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Scroll to='projects' smooth={true} duration={500}>
                        <div className="dropdown">
                            <button onClick={closeMenu}>
                                Use Cases
                            </button>
                        </div>
                    </Scroll>

                    <div className="dropdown2">
                        <button>
                            <span>
                                About
                            </span>
                            <Image
                                className="NavBImg"
                                src={'/assets/v.png'}
                                width={13}
                                height={10}
                                alt="NavBimg" />
                        </button>
                        <div className="dropdownContent2">
                            <Scroll to="roadmap" smooth={true} duration={500}>
                                <div className="drpItem2">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">Roadmap</h4>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={40}
                                        height={40}
                                        alt="drpItemimg" />
                                </div>
                            </Scroll>
                            <Scroll to="partners" smooth={true} duration={500}>
                                <div className="drpItem2">
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">Partners</h4>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={40}
                                        height={40}
                                        alt="drpItemimg" />
                                </div>
                            </Scroll>
                            <Scroll to="team" smooth={true} duration={500} >
                                <div className="drpItem2" >
                                    <div className="drpItemContent" onClick={closeMenu}>
                                        <h4 className="drpTitle">Team</h4>
                                    </div>
                                    <Image
                                        className="drpItemImg"
                                        src={"/assets/drpimg.png"}
                                        width={40}
                                        height={40}
                                        alt="drpItemimg" />
                                </div>
                            </Scroll>
                        </div>
                    </div>
                </div>
            </Menu >
        </div>
    )
}


export default Sidebar;