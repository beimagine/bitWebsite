'use client'
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <>
            <div className="navbarContainer">
                <div className="logoContainer">
                    <Image
                        src={'/assets/logo.svg'}
                        width={130}
                        height={130}
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
                                    <div className="drpItemContent">
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
                            <Link href={''}>
                                <div className="drpItem">
                                    <div className="drpItemContent">
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
                            <Link href={''}>
                                <div className="drpItem">
                                    <div className="drpItemContent">
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
                            <Link href={''}>
                                <div className="drpItem">
                                    <div className="drpItemContent">
                                        <h4 className="drpTitle">BitDpp</h4>
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

                    <div className="dropdown">
                        <button>
                            Use Cases
                        </button>
                    </div>

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
                            <Scroll to='team' smooth={true} duration={500}>
                                <div className="drpItem2">
                                    <div className="drpItemContent">
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
                            <Scroll to='partners' smooth={true} duration={500}>
                                <div className="drpItem2">
                                    <div className="drpItemContent">
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
                            <Scroll to='roadmap' smooth={true} duration={500}>
                                <div className="drpItem2">
                                    <div className="drpItemContent">
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
                        </div>
                    </div>
                </div>

                <div className="normalButtonContainer">
                    <button className="normalButton"><span>Contact Us</span></button>
                </div>

            </div>
            <div className="side">
                <Sidebar />
            </div>
        </>
    );
}

export default Navbar;
