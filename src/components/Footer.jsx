import React, { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFilePdf,
  FaArrowUp,
  FaWhatsapp,
  FaCode,
  FaUserTie,
  FaBriefcase,
  FaShieldAlt
} from "react-icons/fa";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const contactLinks = [
    { 
      icon: <FaPhoneAlt />, 
      label: "Call", 
      href: "tel:+916374421934", 
      color: "#0d6efd" 
    },
    { 
      icon: <FaWhatsapp />, 
      label: "WhatsApp", 
      href: "https://wa.me/916374421934", 
      color: "#25D366" 
    },
    { 
      icon: <FaEnvelope />, 
      label: "Email", 
      href: "mailto:pavannkumar1000@gmail.com", 
      color: "#dc3545" 
    },
    { 
      icon: <FaFilePdf />, 
      label: "Resume", 
      href: "/resume/resume.pdf", 
      color: "#ffc107" 
    }
  ];

  const professionalIcons = [
    { icon: <FaCode />, label: "Code", color: "#4dabf7" },
    { icon: <FaUserTie />, label: "Professional", color: "#20c997" },
    { icon: <FaBriefcase />, label: "Portfolio", color: "#ff922b" },
    { icon: <FaShieldAlt />, label: "Secure", color: "#748ffc" }
  ];

  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => 
        prevIndex === professionalIcons.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const iconStyle = (iconName, iconColor) => ({
    fontSize: "28px",
    transition: "transform 0.3s ease, filter 0.3s ease",
    transform: hoveredIcon === iconName ? "scale(1.2)" : "scale(1)",
    filter: hoveredIcon === iconName ? "brightness(1.25)" : "none",
    color: iconColor,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });

  const backToTopStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#0d6efd",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    border: "none",
    outline: "none",
    zIndex: 1000,
    boxShadow: "0 4px 15px rgba(13, 110, 253, 0.4)"
  };

  const linkContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    margin: "20px 0 30px 0",
    flexWrap: "wrap"
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        style={backToTopStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#0b5ed7";
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(13, 110, 253, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#0d6efd";
          e.currentTarget.style.transform = isVisible ? "translateY(0)" : "translateY(20px)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(13, 110, 253, 0.4)";
        }}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <footer style={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        color: "#fff",
        padding: "60px 0 30px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          padding: "0 20px",
          textAlign: "center"
        }}>
          <div style={{ marginBottom: "40px" }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "10px",
              marginBottom: "15px"
            }}>
              <FaMapMarkerAlt style={{ color: "#ff6b6b", fontSize: "24px" }} />
              <span style={{ fontSize: "1.1rem" }}>Chennai, India</span>
            </div>
            
            <p style={{ 
              color: "#ccc", 
              fontSize: "1.1rem", 
              fontStyle: "italic",
              marginBottom: "10px"
            }}>
              Full Stack Developer | Open to Professional Opportunities
            </p>
            
            <p style={{ 
              color: "#aaa", 
              fontSize: "0.95rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Passionate about creating elegant solutions to complex problems with modern web technologies.
            </p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h4 style={{ 
              fontSize: "1.3rem", 
              fontWeight: "600", 
              marginBottom: "20px",
              color: "#fff"
            }}>
              Get in Touch
            </h4>
            <div style={linkContainerStyle}>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') || link.href.startsWith('/') ? "_blank" : "_self"}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                  style={{ 
                    textDecoration: "none",
                    background: "none",
                    outline: "none",
                    WebkitTapHighlightColor: "transparent"
                  }}
                  onMouseEnter={() => setHoveredIcon(link.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={link.label}
                >
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <div style={iconStyle(link.label, link.color)}>
                      {link.icon}
                    </div>
                    <span style={{ 
                      fontSize: "0.85rem", 
                      color: "#ccc",
                      transition: "color 0.3s ease"
                    }}>
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div style={{ 
            height: "1px", 
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            margin: "30px 0 40px 0"
          }} />

          <div style={{ 
            color: "#aaa", 
            fontSize: "0.9rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px",
              marginBottom: "10px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              <span>© {currentYear} Pavan Kumar</span>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${professionalIcons[currentIconIndex].color}20, ${professionalIcons[currentIconIndex].color}40)`,
                border: `1px solid ${professionalIcons[currentIconIndex].color}60`,
                transition: "all 0.5s ease"
              }}>
                <div style={{
                  color: professionalIcons[currentIconIndex].color,
                  fontSize: "16px",
                  transition: "all 0.5s ease"
                }}>
                  {professionalIcons[currentIconIndex].icon}
                </div>
              </div>
              <span>All rights reserved</span>
            </div>
            
            <div style={{ 
              display: "flex", 
              alignItems: "center",
              gap: "15px",
              fontSize: "0.8rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              <span style={{ color: "#888" }}>Professional Portfolio</span>
              <div style={{ 
                width: "4px", 
                height: "4px", 
                borderRadius: "50%", 
                backgroundColor: "#0d6efd" 
              }} />
              <a 
                href="#privacy" 
                style={{ 
                  color: "#888", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
              >
                Privacy Policy
              </a>
              <span style={{ color: "#888" }}>•</span>
              <a 
                href="#terms" 
                style={{ 
                  color: "#888", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "3px",
          background: "linear-gradient(90deg, #0d6efd, #25D366, #dc3545, #ffc107)"
        }} />
      </footer>

      <style>{`
        @keyframes professionalGlow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 15px currentColor; }
        }
        
        .professional-icon-container {
          animation: professionalGlow 2s ease-in-out infinite;
        }
        
        a:focus,
        a:active,
        a:hover {
          outline: none !important;
          background: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        
        a > div > div:first-child {
          filter: none !important;
          box-shadow: none !important;
          text-shadow: none !important;
        }
        
        @media (max-width: 768px) {
          button[aria-label="Back to top"] {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .copyright-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;