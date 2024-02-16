import Image from "next/image"
import './Footer.css'
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="FSection1">
                    <Image
                        className="Flogo"
                        src={'/assets/logo.svg'}
                        width={130}
                        height={130}
                        alt="Flogo"
                    />
                    <div className="FSection2">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <LinkedIn />
                    </div>
                </div>
                <div className="Faddress">
                    <p>M03 Laffa restaurant building, Sheikh Khalifa Bin Zayed St-opp. Burjuman Mall, Dubai, United Arab Emirated</p>
                </div>
            </div>
            <p className="copyright">© 2023 Beyond Imagination Technologies Pvt. Ltd.</p>
        </>
    )
}

export default Footer