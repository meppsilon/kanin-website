import React from "react";
import tidalLogo from "../assets/tidal_logo.png";
import contact from "../content/contact";

const Contact = ({}) => {
  const contactCategories = Object.keys(contact);
  return (
    <div id="contact" className="h-screen">
      {contactCategories.map(category => (
        <div className="text-white">
          <div>{category}</div>
          {contact[category].map(contact => (
            <div>
              <p>{contact.name}</p>
              {contact.email && <p>{contact.email}</p>}
              {contact.phone && <p>{contact.phone}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Contact;
