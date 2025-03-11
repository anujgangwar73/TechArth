import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

/***************Image Imports*******************************/
import slider_1 from '../assets/slider_1.jpg';
import slider_2 from '../assets/slider_2.jpg';
import slider_3 from '../assets/slider_3.jpg';
import illustration from '../assets/illustration.jpg';
import industry from '../assets/industry.jpg';
import industry_welding from '../assets/industry_welding.jpg';
import scott from '../assets/scott.jpg';
import playpausebutton from '../assets/playpausebutton.gif';
import bg from '../assets/bg.jpg';
import building from '../assets/building.jpg';
import LogoSlider from '../components/logoSlider';
import SimpleImageSlider from "react-simple-image-slider";
import Stats from '../components/stats';
import Blogs from '../components/blogs';
import Card from '../components/card';

const Home = () => {

    const images = [
        { url: slider_1 },
        { url: slider_2 },
        { url: slider_3 },
    ];

    const tabItems = [
        { key: "mission", text: "Our Mission" },
        { key: "vision", text: "Our Vision" }
    ];

    const [activeTab, setActiveTab] = useState("mission");
    const navigate = useNavigate();

    const handleTabClick = (tabKey) => {
        setActiveTab(tabKey);
    };

    return (
        <>
            <div className='home-cont'>
                <div className='slider-container'>
                    <SimpleImageSlider
                        width={"100%"}
                        height={500}
                        images={images}
                        style={{ background: "lightgray" }}
                        loop={true}
                        autoPlay={true}
                    />
                </div>
                <div className='slider-text-button-cont'>
                    <div className='heading-text'>
                        Transforming TechArth
                        with Innovative Solutions
                    </div>
                    <div className='small-text'>
                        Premier Provider of Sustainable, Data-Driven, and
                        Intelligent Solutions for Smarter Assets and
                        Efficient Operations.
                    </div>
                    <div>
                        <button onClick={() => { navigate("/services") }}>
                            Our Services
                        </button>
                    </div>
                </div>
                <div className='about-us-cont'>
                    <div className='about-us'>
                        <span>About Us</span>
                        <div className='history-label-text'>
                            We work for you since 2000.
                            <br />
                            Industrial around the world
                        </div>
                        <div className='label-text'>
                            TechArth is a trusted provider of cutting-edge business software
                            and consultancy, delivering scalable and flexible solutions to
                            tackle today’s challenges while empowering enterprises for future
                            success. Backed by a team of skilled tech professionals, TechArth
                            fosters strong customer relationships, offering end-to-end solutions
                            and services with a single point of accountability—ensuring faster
                            ROI and cost-effective ownership.
                        </div>
                        <div className='tab-cont'>
                            {tabItems.map(({ key, text }, index) => (
                                <React.Fragment key={key}>
                                    <div
                                        className={`tab-text ${activeTab === key ? 'active' : 'inactive'}`}
                                        onClick={() => handleTabClick(key)}
                                    >
                                        {text}
                                    </div>
                                    {index !== tabItems.length - 1 && <div className="separator"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                        {activeTab === "mission" && (
                            <div className="label-text" style={{ width: "540px" }}>
                                To design and deliver cost-effective, high-quality, and user-friendly IT solutions
                                built on global best practices and the latest technologies. TechArth prioritizes
                                customer needs, ensuring tailored solutions that drive efficiency, innovation, and satisfaction.
                            </div>
                        )}
                        {activeTab === "vision" && (
                            <div className="label-text" style={{ width: "540px" }}>
                                To enhance people's lives through innovative and sustainable
                                digital products and services, delivering cost-effective solutions
                                that drive progress and efficiency.
                            </div>
                        )}
                        <div>
                            <button onClick={() => { navigate("/about") }}>
                                Explore More
                                <Icon path={mdiArrowRight} size={1} />
                            </button>
                        </div>
                    </div>
                    <div className='illustration-img'>
                        <img src={illustration} alt="Illustration" width={"520px"} />
                    </div>
                </div>
                <div className='what-we-do-cont'>
                    <div className='text-cont'>
                        <span>What We Do</span>
                        <div className='text'>
                            Your partner in Digital Transformation!
                        </div>
                        <div className='label-text'>
                            We offer enterprise application services in partnership with IBM and
                            Microsoft. Our consulting services include assessments of existing systems,
                            reporting system audits, and business intelligence reporting using tools
                            such as BIRT and IBM COGNOS. Additionally, we provide bespoke, tailor-made
                            solutions on demand, web development services, and IBM Maximo training,
                            implementation, and integration services.
                        </div>
                    </div>
                    <div className='bg-image-cont'
                        style={{
                            backgroundImage: `url(${industry})`,
                            backgroundColor: 'lightgray',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            opacity: .4
                        }}
                    >
                    </div>
                </div>
                <div>
                    <Card />
                </div>
                <div style={{ marginTop: "40px" }}>
                    <Stats />
                </div>
                <div className='why-choose-us-cont'>
                    <div className='big-ellipsis'>
                        <img src={industry_welding} />
                    </div>
                    <div className='small-ellipsis'>
                        <img src={scott} />
                    </div>
                    <div className='play-pause-button'>
                        <img src={playpausebutton} />
                    </div>
                    <div className='text-svg-cont'>
                        <div className='svg'>
                            <img src={bg} />
                        </div>
                        <div className='text-cont'>
                            <div className='heading-text'>
                                Why Choose Us
                            </div>
                            <div className='content-text'>
                                We are a dynamic team of passionate professionals,
                                fueled by a vision to serve people through innovation
                                and technology. Inspired by Steve Jobs’ words, “Stay hungry, stay
                                foolish,” we embrace curiosity, resilience, and
                                a relentless pursuit of excellence. With this mindset,
                                we aim to build a lasting legacy through transformative solutions.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='partnership-cont'>
                    <div className='image'>
                        <img src={building} />
                    </div>
                    <div>
                        Our Partner
                    </div>
                    <div>
                        Forming two comfort invited.
                        Yet she income effect edward.
                    </div>
                    <div className='slick'>
                        <LogoSlider />
                    </div>
                </div> */}
                {/* <div>
                    <Blogs />
                </div> */}
            </div >
        </>
    )
}

export default Home
