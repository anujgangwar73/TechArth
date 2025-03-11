import React from 'react'
import LogoSlider from '../components/logoSlider'
import about_us_illutration from '../assets/about_us_illutration.jpg'
import manufacture from '../assets/manufacture.jpg'
import robotics from '../assets/robotics.jpg'
import Stats from '../components/stats'
import Layer_1 from '../assets/Layer_1.jpg'
import QuoteRequest from '../components/quoteRequest'
import Blogs from '../components/blogs'
const CheckSvgIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
      <g clipPath="url(#clip0_180_199)">
        <path d="M18.2672 0C18.7474 0.222209 19.1335 0.528385 19.1949 1.09978C19.2902 1.97325 18.7311 2.56819 17.7777 2.57331C14.3273 2.60124 11.0044 3.88061 8.42619 6.17372C5.83743 8.47773 4.22765 11.3347 3.67979 14.759C3.23795 17.4159 3.5755 20.1439 4.6516 22.6131C6.07808 25.9083 8.41697 28.3639 11.6253 29.9603C14.2284 31.2557 16.9922 31.6724 19.8759 31.2915C22.5031 30.959 24.9804 29.8821 27.0155 28.1878C29.765 25.9145 31.509 23.0278 32.1449 19.497C32.2829 18.7136 32.3542 17.9199 32.3579 17.1244C32.3651 16.4219 32.6815 15.9683 33.2427 15.7932C33.5444 15.6904 33.8735 15.7035 34.1661 15.8299C34.4588 15.9563 34.6939 16.1871 34.8258 16.4772C34.8565 16.5428 34.8422 16.637 34.9282 16.6718V18.2651C34.8412 18.815 34.7644 19.368 34.6661 19.9159C33.9308 24.0323 31.9339 27.429 28.7328 30.0965C25.8655 32.4845 22.5353 33.7645 18.812 33.9805C16.7426 34.1008 14.6694 33.8248 12.7036 33.1675C9.11947 31.9807 6.21736 29.8589 4.05562 26.7726C1.32349 22.8701 0.369094 18.5416 1.23952 13.8578C1.95635 9.99631 3.84774 6.77173 6.80822 4.18919C9.23896 2.05053 12.2381 0.663218 15.4419 0.195576C15.8515 0.132088 16.2723 0.147442 16.6707 0.010225L18.2672 0Z" fill="#2D6C80" />
        <path d="M9.03201 14.675C9.03201 14.3135 9.31362 13.865 9.76625 13.6694C10.2854 13.4452 10.7985 13.524 11.1999 13.9459C12.1942 15.0006 13.1722 16.0697 14.1542 17.1346C14.9796 18.0283 15.8029 18.9239 16.6242 19.8216C16.742 19.9507 16.8352 19.9558 16.9458 19.8216C17.0021 19.7551 17.0697 19.6967 17.1321 19.6332C20.1243 16.6479 23.1162 13.663 26.1078 10.6783C28.1139 8.67844 30.1312 6.68982 32.1271 4.68175C32.9586 3.84616 34.1137 4.43905 34.3031 5.26133C34.3437 5.42285 34.3493 5.59116 34.3196 5.75503C34.2899 5.91889 34.2257 6.07454 34.1311 6.2116C34.0224 6.36463 33.8993 6.50695 33.7635 6.63658C30.4763 9.92022 27.1875 13.2032 23.8969 16.4854C21.8488 18.5239 19.8008 20.5606 17.7527 22.5957C17.0574 23.2879 16.3805 23.2961 15.72 22.5834C13.6036 20.2958 11.4897 18.0023 9.37813 15.7031C9.15284 15.4563 9.02996 15.1696 9.03201 14.675Z" fill="#2D6C80" />
      </g>
      <defs>
        <clipPath id="clip0_180_199">
          <rect width="34" height="34" fill="white" transform="translate(0.929932)" />
        </clipPath>
      </defs>
    </svg>
  )
}

const About = () => {
  return (
    <div className='about-cont'>
      <div className='about-us-img-cont'>
        <div className='about-us-text-cont'>
          <div>
            About Us
          </div>
          <div>
            Driving Innovation
            Across Industries
          </div>
        </div>
        <div className='img'>
          <img src={about_us_illutration} width={"320px"} height={"250px"} />
        </div>
      </div>
      {/* <div className='slick'>
        <LogoSlider />
      </div> */}
      <div className='work-details-img-cont'>
        <div className='work-details-cont'>
          <div className='about-bg-text'>
            ABOUT
          </div>
          <div className='about-heading'>
            We work for you since 2000.
            Industrial around the world
          </div>
          <div className='content-text'>
            TechArth is a trusted provider of cutting-edge business software
            and consultancy, delivering scalable and flexible solutions to
            tackle today’s challenges while empowering enterprises for future
            success. Backed by a team of skilled tech professionals, TechArth
            fosters strong customer relationships, offering end-to-end solutions
            and services with a single point of accountability—ensuring faster ROI
            and cost-effective ownership.
            At the core of TechArth's mission are three key pillars.
          </div>
          <div className='service-highlights-icons-cont'>
            <div>
              <CheckSvgIcon />
            </div>
            <div className='content-text-cont'>
              <div>
                Quality
              </div>
              {/* <div>
                Following the quality of our service thus having gained trust of our many clients.
              </div> */}
            </div>
          </div>
          <div className='service-highlights-icons-cont'>
            <div>
              <CheckSvgIcon />
            </div>
            <div className='content-text-cont'>
              <div>
                Reliability
              </div>
              {/* <div>
                We have established a corporate mandate to maintain strong core values that truly reflect.
              </div> */}
            </div>
          </div>
          <div className='service-highlights-icons-cont'>
            <div>
              <CheckSvgIcon />
            </div>
            <div className='content-text-cont'>
              <div>
                Innovation
              </div>
              {/* <div>
                Our company develops a unique dynamically and keeps in step with the times.
              </div> */}
            </div>
          </div>
        </div>
        <div className='img-cont'>
          <div>
            <img src={manufacture} height={"300px"} />
          </div>
          <div>
            <img src={robotics} height={"300px"} />
          </div>
        </div>
      </div>
      {/* <div>
        <Stats />
      </div> */}
      <div className='expertise-details-img-cont'>
        <div className='img-cont'>
          <img src={Layer_1} height={"300px"} width={"140%"} />
        </div>
        <div className='content-text'>
          <div>
            Meet Our Experts
          </div>
          <div>
            Team Members
          </div>
          <div>
            We have a highly skilled team of professionals with diverse
            industrial experience, having worked in core sectors such
            as Oil & Gas, Manufacturing, and Transportation, providing
            specialized industrial automation services. The combined
            experience of our professionals exceeds 100 years.
          </div>
        </div>
      </div>
      {/* <div>
        <QuoteRequest />
      </div> */}
      {/* <div style={{ marginTop: "30px" }}>
        <Blogs />
      </div> */}
    </div>
  )
}

export default About