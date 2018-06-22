import React from "react";
import tidalLogo from "../assets/tidal_logo.png";
import contact from "../content/contact";

const Contact = ({}) => {
  const contactCategories = Object.keys(contact);
  return (
    <div id="contact" className="h-screen">
      <div className="pt-8 text-center">
        {contactCategories.map(category => (
          <div className="text-white" style={{ marginBottom: '2rem' }} key={category}>
            <div className="text-lg font-bold mb-2">{category}</div>
            {contact[category].map(contact => (
              <div className="mb-4" key={`${category}-${contact}`}>
                <p className="text-white text-sm font-semibold block mb-1">{contact.name}</p>
                {contact.email && (
                  <a className="text-white text-sm font-medium block mb-1" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <p className="text-white block text-sm font-medium">{contact.phone}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
