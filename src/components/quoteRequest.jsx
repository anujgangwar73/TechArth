import React, { useState } from 'react';
import hat from '../assets/hat.jpg';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
import emailjs from '@emailjs/browser';
import { message } from './toastMessage';
import Spinner from './Spinner';

const QuoteRequest = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        options: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // Inline validation to remove error when correct data is entered
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            
            if (name === "name") {
                const nameRegex = /^[a-zA-Z\s]{3,}$/;
                if (value.trim() && nameRegex.test(value)) {
                    delete newErrors.name;
                }
            }
    
            if (name === "email") {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (value.trim() && emailRegex.test(value)) {
                    delete newErrors.email;
                }
            }
    
            if (name === "phone") {
                const phoneRegex = /^[0-9]{10}$/;
                if (value.trim() && phoneRegex.test(value)) {
                    delete newErrors.phone;
                }
            }
    
            if (name === "message") {
                if (value.trim().length >= 10) {
                    delete newErrors.message;
                }
            }
    
            return newErrors;
        });
    };    

    const validateForm = () => {
        let newErrors = {};
        const nameRegex = /^[a-zA-Z\s]{3,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name must be at least 3 characters and contain only letters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true); 

        const serviceID = "service_qjfouvu";
        const templateID = "template_2s2ggn5";
        const publicKey = "0CkeTQrz113VmvFlQ";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(response => {
                message("success", "Request sent successfully!");
                setFormData({ name: '', email: '', phone: '', options: '', message: '' });
                setErrors({});
            })
            .catch(error => {
                console.error("Error sending email:", error);
                message("error", "Failed to send request.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='quote-request-cont'>
            <div className='quote-form-cont'>
                <div className='heading-text'>Got any questions on your mind?</div>
                <div className='content-text'>We’re here and ready to assist!</div>
                <div className="form-wrapper">
                    {loading && (
                        <div className="form-loading">
                            <Spinner size="48" stroke="#006F75" />
                        </div>
                    )}
                    <form className='form-cont' onSubmit={handleSubmit} noValidate>
                        <div className='field-container'>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className='field-container'>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='field-container'>
                            <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className='field-container'>
                            <input type="text" name="options" value={formData.options} onChange={handleChange} placeholder="Options" />
                        </div>
                        <div className='field-container'>
                            <input type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Message!" required />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <button type="submit" disabled={loading}>
                                Submit Request
                                <Icon path={mdiArrowRight} size={1} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='img-cont'>
                <img src={hat} alt="Hat" />
            </div>
        </div>
    );
};

export default QuoteRequest;
