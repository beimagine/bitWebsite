'use client'
import "./Team.css"
import Image from "next/image"
import { teamData } from "./teamData"
import { Element } from "react-scroll"
const Team = () => {
    return (
        <Element name="team">
            <div className="teamSection">
                <h1 className="teamTitle">Our Team</h1>
                <div className="team">
                    {teamData.map((data, index) => (
                        <div key={index} className="Tbox">
                            <Image
                                src={`${data.img}`}
                                className="TboxImg"
                                width={150}
                                height={150}
                                alt="boximg"
                            />
                            <p>{data.role}</p>
                            <h3>{data.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}
export default Team;