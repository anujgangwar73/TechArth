import React from 'react'
import QuoteRequest from '../components/quoteRequest'
import teamwork from '../assets/teamwork.jpg'
import Icon from '@mdi/react';
import { mdiEmail, mdiEmailOutline, mdiLocationEnter, mdiMapMarker, mdiMapMarkerOutline, mdiPhoneOutline } from '@mdi/js';

const Contact = () => {
  return (
    <>
      <div className='contact-cont'>
        <div className='teamwork-img'>
          <img src={teamwork} width={"100%"} />
        </div>
        <div className='linear-bg-text-cont'>
          <div className='text-sm-heading'>
            We're Here to Help!
          </div>
          <div className='text-md-heading'>
            Have questions or need assistance?
          </div>
        </div>
        <div className='solution-details-cont'>
          <div className='solution-bg-text'>
            CONTACT
          </div>
          <div className='solution-heading'>
            Get in Touch!
          </div>
          <div className='content-text'>
            We’re here to help you with any inquiries, feedback, or
            support you may need. Whether you're looking for more
            information about our services, need assistance, or want
            to explore potential collaborations, don’t hesitate to reach out.
            Our team is ready and eager to assist you!”
          </div>
        </div>
        <div className='contact-details-cont'>
          <div className='sub-cont'>
            <div className='icon-details-cont'>
              <div>
                <Icon path={mdiEmailOutline} size={1} color={"black"} />
              </div>
              <div className='details-cont'>
                <div>
                  Email Address
                </div>
                <div style={{ marginRight: "10px" }}>
                  letstalk@techarthco.com
                </div>
              </div>
            </div>
            <div className='separator'>
            </div>
          </div>
          <div className='sub-cont'>
            <div className='icon-details-cont'>
              <div>
                <Icon path={mdiPhoneOutline} size={1} color={"black"} />
              </div>
              <div className='details-cont'>
                <div>
                  Phone Number
                </div>
                <div>
                  +91 9810156429
                </div>
              </div>
            </div>
            <div className='separator'>
            </div>
          </div>
          <div className='sub-cont'>
            <div className='icon-details-cont'>
              <div>
                <Icon path={mdiMapMarkerOutline} size={1} color={"black"} />
              </div>
              <div className='details-cont'>
                <div>
                  Head Office
                </div>
                <div>
                  Nirvana Country, Gurugram, 122018
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <QuoteRequest />
        </div >
      </div>
    </>
  )
}

export default Contact