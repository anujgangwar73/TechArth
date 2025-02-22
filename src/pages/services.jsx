import React, { useState } from 'react'
import service_illustration from '../assets/service_illustration.jpg';
import radial from '../assets/radial.gif';
import LogoSlider from '../components/logoSlider';
import Card from '../components/card';
import question from '../assets/question.jpg';
import Icon from '@mdi/react';
import { mdiMinusThick, mdiPlusThick } from '@mdi/js';
import QuoteRequest from '../components/quoteRequest'

const Services = () => {

  const [openIndex, setOpenIndex] = useState(null); // Stores the currently open question index

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className='services-cont'>
        <div className='service-top-cont'>
          <div className='content-text'>
            <div>
              Our Services
            </div>
            <div>
              Create Innovative Places in the World
            </div>
          </div>
          <div className='img-cont'>
            <img className='radial' src={radial} alt="Background" />
            <img className='illustration' src={service_illustration} alt="Illustration" />
          </div>
        </div>
        <div className='slick'>
          <LogoSlider />
        </div>
        <div className='solution-details-cont'>
          <div className='solution-bg-text'>
            SERVICE
          </div>
          <div className='solution-heading'>
            Advanced Analytics Solution
          </div>
          <div className='content-text'>
            Repair summer one winter living feebly pretty his.
            In so sense am known these since. Shortly respect ask cousins brought.
            Last ask him cold feel met spot shy want. Children me laughing we prospect.
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <Card />
        </div>
        <div className='question-cont'>
          <div className='content-cont'>
            <div className='text-s-heading'>Have any question</div>
            <div className='text-m-heading'>Frequently Asked Questions</div>
            <div className='faq-item'>
              <div className='text-button-cont' onClick={() => toggleFAQ(0)}>
                <div className='button-inner-text'>
                  Appropriate For Your Specific Business
                </div>
                <button>
                  <Icon path={openIndex === 0 ? mdiMinusThick : mdiPlusThick} size={1} />
                </button>
              </div>
              {openIndex === 0 && (
                <div className='faq-content'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </div>
              )}
            </div>
            <div className='faq-item'>
              <div className='text-button-cont' onClick={() => toggleFAQ(1)}>
                <div className='button-inner-text'>Design & Development Troubleshooting</div>
                <button>
                  <Icon path={openIndex === 1 ? mdiMinusThick : mdiPlusThick} size={1} />
                </button>
              </div>
              {openIndex === 1 && (
                <div className='faq-content'>
                  This section explains common design and development issues and how to troubleshoot them.
                </div>
              )}
            </div>
            <div className='faq-item'>
              <div className='text-button-cont' onClick={() => toggleFAQ(2)}>
                <div className='button-inner-text'>Online Support & Action</div>
                <button>
                  <Icon path={openIndex === 2 ? mdiMinusThick : mdiPlusThick} size={1} />
                </button>
              </div>
              {openIndex === 2 && (
                <div className='faq-content'>
                  Here’s how to get online support and take necessary actions.
                </div>
              )}
            </div>
          </div>
          <div className='img-cont'>
            <img src={question} alt="question" width="400px" />
          </div>
        </div>
        <div>
          <QuoteRequest />
        </div>
      </div>
    </>
  )
}

export default Services