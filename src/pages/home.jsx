import React, { useState } from 'react'
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
import group5 from '../assets/group5.jpg';
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
                        Providing Cutting-Edge Services and Products
                        to Drive Your Success
                    </div>
                    <div>
                        <button>
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
                            We solve worldwide industrial every problem,
                            the heart of global landscape the industry stands multidimensional
                            electronic typesetting.
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
                        <div className='label-text' style={{ width: "540px" }}>
                            We strive to provide exceptional [products/services] that
                            exceed expectations and contribute to the growth and success of our
                            customers. Our focus is on creating long-lasting value
                            while maintaining a high standard of excellence.
                        </div>
                        <div>
                            <button>
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
                            The provider for your
                            manufacturing Industrial solutions!
                        </div>
                        <div className='label-text'>
                            At TechArth, we specialize in providing [products/services] that drive
                            success and innovation in the industry. Our expert team is committed to
                            delivering solutions that enhance efficiency, optimize performance,
                            and provide measurable results for our clients.
                        </div>
                        <div>
                            <button>
                                Schedule An Appointment
                                <Icon path={mdiArrowRight} size={1} />
                            </button>
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
                            <img src={group5} />
                        </div>
                        <div className='text-cont'>
                            <div className='heading-text'>
                                Why Choose Us
                            </div>
                            <div className='content-text'>
                                Great Experience For
                                Building Construction
                                & Renovation
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Stats />
                </div>
                <div className='partnership-cont'>
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
                </div>
                <div>
                    <Blogs />
                </div>
            </div >
        </>
    )
}

export default Home
