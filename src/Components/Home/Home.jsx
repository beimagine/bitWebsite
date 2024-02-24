'use client'
import Contact from '../Contact/Contact'
import Partners from '../Partners/Partners'
import Projects from '../Projects/Projects'
import Projects2 from '../Projects2/Projects2'
import Roadmap from '../Roadmap/Roadmap'
import Team from '../Team/Team'
import {Link as Scroll} from 'react-scroll'
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="HContent">
                    <h1 ><span className='Bword1'>Transforming Tomorrow with Innovative</span><br></br> <span className='Bword2'>Blockchain Solutions</span></h1>
                    <p>Welcome to Beyond Imagination Technologies, where innovation meets limitless possibilities. Explore the world of cutting-edge solutions and transformative technologies. From pioneering blockchain applications to revolutionary environmental platforms, we are redefining the future. Discover, innovate, and shape the future with Beyond Imagination Technologies.</p>
                    <Scroll to='projects' smooth={true} duration={500}>
                    <button className='learnButton'>Learn More</button>
                    </Scroll>
                </div>
            </div>
            <div className='emptyContainer'></div>
            <div className='vision'>
                <div className='Vcontent'>
                    <h1>
                        <span className='visionWord'>Our Vision</span>
                    </h1>
                    <p>Our vision is to pioneer the next frontier of technological evolution by designing revolutionary blockchain-based products. We are committed to crafting solutions that transcend imagination, addressing real-world challenges with innovation, transparency, and a commitment to creating lasting positive impact.</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <Projects />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Projects2 />
            <Roadmap />
            <Partners />
            <div className='TCBG'>
            <Team />
            <Contact />
            </div>
        </>
    )
}

export default Home