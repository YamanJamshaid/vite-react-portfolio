import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to an API
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <section id='contact' className="bg-black bg-opacity-50 backdrop-blur-md border border-cyan-800/30 hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg m-20 mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
            {successMessage && <p className="text-cyan-600 mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black" id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black" id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black" id="message" name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required />
                </div>
                <button className="bg-cyan-600/90 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send Message</button>
            </form>
        </section>
    );
}
