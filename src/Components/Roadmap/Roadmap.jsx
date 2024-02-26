'use client'
import "./Roadmap.css"
import { Element } from "react-scroll";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineOppositeContent } from "@mui/lab";
import TimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';

const Roadmap = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Element name="roadmap">
            <div className="roadSection">
                <h1 className="roadTitle">Roadmap - 2024</h1>
                <br></br>
                <br></br>
                <div className="roadmap">
                    <Timeline position={isSmallScreen ? 'right' : 'alternate'}>
                        <TimelineItem>
                            <TimelineOppositeContent><img className="RBG1" src="/assets/RBG1.svg" /></TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="dot" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="Q1">
                                    <h1>Quarter 1</h1>
                                    <h2>BitMemoir Mainnet Launch</h2>
                                    <p>The BitMemoir platform will officially go live. People will be able to use it to issue, store, and share their sensitive documents and credentials.</p>
                                    <h2>BitMemoir Integration Framework</h2>
                                    <p>Integration into other systems or platforms will be enabled, making the platform more versatile and accessible.</p>
                                    <h2>BitWallet Beta Launch</h2>
                                    <p>The beta version of BitWallet will be released which will allow users to store and manage their digital assets securely.</p>
                                    <h2>BitBhoomi MVP Launch</h2>
                                    <p>A basic version of BitBhoomi, will be launched, showcasing the core features and functionality of the platform.</p>
                                    <h2>BitBhoomi Beta Launch</h2>
                                    <p>The beta version of BitBhoomi will be released, allowing users to test and provide feedback on the platform before its official launch.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent></TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="dot"></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="Q2">
                                    <h1>Quarter 2</h1>
                                    <h2>Digital Product Passport (DPP) MVP Launch</h2>
                                    <p>This illustrates the launch of the minimum viable product of DPP.</p>
                                    <h2>IDO Token Launch (Community Sale)</h2>
                                    <p>The projects token will be offered for sale to the community through a decentralized exchange. This will allow community members to participate in the projects growth</p>
                                    <h2>Token Listing on Decentralized Exchange</h2>
                                    <p>After the IDO, the projects token will be listed on a decentralized exchange, making it available for trading among users.</p>
                                    <h2>BitBhoomi Mainnet Launch</h2>
                                    <p>This is the official launch of the BitBhoomi platform on the mainnet, meaning it will be fully operational and accessible to users.</p>
                              </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent></TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="dot" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="Q3">
                                    <h1>Quarter 3</h1>
                                    <h2>BitWallet Mainnet Launch</h2>
                                    <p>Similar to the BitBhoomi Mainnet Launch, this refers to the official launch of the BitWallet platform on the mainnet.</p>
                                    <h2>Digital Product Passport (DPP) Beta Launch</h2>
                                    <p>The beta version of DPP will be released, allowing users to test and provide feedback on the system before its official launch.</p>
                                    <h2>Token Listing on Centralized Exchanges</h2>
                                    <p>The projects token will be listed on centralized exchanges, providing more opportunities for users to trade and access the token.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent><img className="RBG2" src="/assets/RBG2.svg"></img></TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="dot" />
                                <TimelineConnector />
                                <TimelineDot className="dot" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="Q4">
                                    <h1>Quarter 4</h1>
                                    <h2>BitBhoomi Full Launch</h2>
                                    <p>This is the official launch of the complete and fully functional BitBhoomi platform. Users will be able to utilize all the features and benefits of this revolutionary platform.</p>
                                    <h2>BitMemoir Enhancements</h2>
                                    <p>During this quarter, BitMemoir will undergo enhancements and improvements based on user feedback and market demands. This will make the platform even more robust and user-friendly.</p>
                                    <h2>BitWallet Enhancements</h2>
                                    <p>Similar to BitMemoir, BitWallet will also receive enhancements and updates to improve its functionality and user experience</p>
                                    <h2>DPP Mainnet Launch</h2>
                                    <p>The official launch of the Digital Product Passport (DPP) on the mainnet. Users will be able to utilize the full capabilities of DPP for verifying the authenticity and ownership of digital products</p>
                                    <h2>Community Engagement and Partnerships</h2>
                                    <p>In Quarter 4, there will be a focus on engaging with the community and forming partnerships to further strengthen the BIT’s ecosystem and reach.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </Element>
    )
}
export default Roadmap