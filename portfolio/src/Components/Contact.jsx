import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#595c9f]">
                Got A Challenge? Lets Tackle It Together!
            </h2>
            <p className="text-gray-700 mb-8 text-md md:text-xl text-center">
                Drop me a line, and I'll get back to you quickly.
            </p>

            <form
                action="https://formspree.io/f/meqbnkzy"
                method="POST"
                className="bg-white p-4 md:p-6 rounded-xl shadow-md w-full md:w-[700px] border border-gray-300 space-y-6"
            >
                {['Name', 'Email', 'Phone (optional)', 'Message'].map((label, idx) => (
                    <div key={idx} className="mb-4">
                        <label className={`block text-gray-800 text-sm md:text-base font-semibold mb-2 ${idx === 3 ? "block" : ""}`}>{label}</label>
                        {idx !== 3 ? (
                            <input
                                type={label === 'Email' ? "email" : label === 'Phone (optional)' ? "tel" : "text"}
                                name={label.toLowerCase().replace(/ \(optional\)| /g, '')}
                                placeholder={label === 'Name' ? "John Doe" : label === 'Email' ? "example@email.com" : label === 'Phone (optional)' ? "(555) 555-5555" : ""}
                                value={idx === 0 ? formData.name : idx === 1 ? formData.email : formData.phone}
                                onChange={handleChange}
                                required={idx !== 2}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        ) : (
                            <textarea
                                name="message"
                                placeholder="Share your thoughts..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="2"
                            ></textarea>
                        )}
                    </div>
                ))}

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#595c9f] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105"
                    >
                        Dispatch
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;



