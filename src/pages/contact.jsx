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
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right
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
                <div>
                  info@techarth.com
                </div>
                <div>
                  career@techarth.in
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
                  +65 (254) 896-4562
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
                  14/A, Queen Street City
                </div>
                <div>
                  Town New York, US
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