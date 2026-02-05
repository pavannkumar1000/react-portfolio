import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const contacts = [
    { icon: <FaPhone />, label: "+91 6374421934", subLabel: "Call me anytime", href: "tel:+916374421934", color: "#0d6efd" },
    { icon: <FaWhatsapp />, label: "WhatsApp", subLabel: "Chat with me", href: "https://wa.me/916374421934", color: "#25D366" },
    { icon: <FaEnvelope />, label: "Mail Me", subLabel: "I reply promptly", href: "mailto:pavannkumar1000@gmail.com", color: "#dc3545" },
    { icon: <FaLinkedin />, label: "LinkedIn", subLabel: "Connect professionally", href: "https://www.linkedin.com/in/pavan-kumar-y-02557a36b/", color: "#0a66c2" },
    { icon: <FaGithub />, label: "GitHub", subLabel: "See my projects", href: "https://github.com/pavannkumar1000", color: "#333" },
    { icon: <FaFilePdf />, label: "Resume", subLabel: "View PDF", href: "/resume/resume.pdf", color: "#d9534f" },
    { icon: <FaInstagram />, label: "Instagram", subLabel: "@pavannkumar1000", href: "https://www.instagram.com/pavannkumar1000", color: "#E1306C" },
  ];

  return (
    <section
      className="section"
      id="contact"
      style={{ paddingTop: "100px", paddingBottom: "100px", background: "#f8f9fa" }}
    >
      <div className="container text-center">
        <h2
          className="section-title mb-5"
          style={{ fontSize: "2.5rem", fontWeight: "700" }}
        >
          Contact Me
        </h2>

        <p
          className="fs-5 mb-5"
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          I am open to professional opportunities and collaborations. Please feel
          free to get in touch for any discussions related to projects, roles, or
          potential collaborations.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-5">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon text-decoration-none d-flex flex-column align-items-center"
              style={{ color: c.color }}
            >
              <span className="icon" style={{ fontSize: "50px" }}>
                {c.icon}
              </span>
              <span className="label">{c.label}</span>
              <span className="sub-label">{c.subLabel}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        /* Remove any box / background / outline */
        .contact-icon {
          background: transparent !important;
          box-shadow: none !important;
          outline: none !important;
          border: none !important;
          -webkit-tap-highlight-color: transparent;
        }

        /* ORIGINAL COLOR + LIGHT EFFECT ONLY */
        .icon {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .contact-icon:hover .icon {
          transform: translateY(-6px) scale(1.15);
          filter: brightness(1.25);
        }

        /* Text remains unchanged */
        .contact-icon .label {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-top: 8px;
          transition: letter-spacing 0.3s ease;
        }

        .contact-icon:hover .label {
          letter-spacing: 1px;
        }

        .contact-icon .sub-label {
          font-size: 0.85rem;
          color: #777;
          margin-top: 3px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
