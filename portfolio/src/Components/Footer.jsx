import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#595c9f] text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Zander Marenberg. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

