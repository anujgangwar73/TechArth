import React from 'react'
import hat from '../assets/hat.jpg'
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const QuoteRequest = () => {
    return (
        <>
            <div className='quote-request-cont'>
                <div className='quote-form-cont'>
                    <div className='heading-text'>
                        Request A Quote
                    </div>
                    <div className='content-text'>
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                        We take great pride in everything that we do in our factory.
                    </div>
                    <div className='form-cont'>
                        <div className='field-container'>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className='field-container'>
                            <input type="number" placeholder="Phone" />
                            <input type="text" placeholder="Options" />
                        </div>
                        <div className='field-container'>
                            <input type="text" placeholder="Message!" />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <button>
                            Submit Request
                            <Icon path={mdiArrowRight} size={1} />
                        </button>
                    </div>
                </div>
                <div className='img-cont'>
                    <img src={hat} />
                </div>
            </div>
        </>
    )
}

export default QuoteRequest