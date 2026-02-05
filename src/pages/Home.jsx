import React, { useState, useEffect } from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const roles = ["Full Stack Developer", "React Developer", "Django Developer", "Problem Solver"];

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = roles[textIndex];
    const speed = isDeleting ? 50 : 100;
    const pause = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      position: "relative",
      overflow: "hidden",
      paddingTop: "100px",
      paddingBottom: "40px",
      paddingLeft: "20px",
      paddingRight: "20px"
    }}>
      
      {/* Background elements */}
      <div style={{
        position: "absolute",
        top: "15%",
        right: "10%",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)"
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "20%",
        left: "10%",
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)"
      }} />

      <div style={{
        maxWidth: "900px",
        width: "100%",
        textAlign: "center",
        position: "relative",
        zIndex: "2",
        marginTop: isMobile ? "0" : "-30px"
      }}>
        
        {/* Greeting */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#60a5fa",
          fontSize: isMobile ? "1.1rem" : "1.3rem",
          fontWeight: "500",
          marginBottom: "30px",
          letterSpacing: "2px",
          padding: "12px 28px",
          background: "rgba(96, 165, 250, 0.12)",
          borderRadius: "30px",
          border: "1px solid rgba(96, 165, 250, 0.25)",
          display: "inline-block",
          backdropFilter: "blur(8px)",
          textTransform: "uppercase"
        }}>
          👋 Hello, I'm
        </div>


{/* Name */}
<h1 style={{
  fontFamily: "'Montserrat', sans-serif",
  fontSize: isMobile ? "2.8rem" : "4.2rem",
  fontWeight: "800",
  color: "#f8fafc",
  lineHeight: "1.1",
  marginBottom: "25px",
  letterSpacing: "-0.5px"
}}>
  PAVAN KUMAR{" "}
  <span style={{
    color: "#a78bfa",
    position: "relative",
    fontWeight: "800",
    display: "inline-block"
  }}>
    Y
    {/* subtle orange underline */}
    <span style={{
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70%",
      height: "4px",
      background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
      borderRadius: "4px",
      opacity: 0.9
    }} />
  </span>
</h1>



        {/* Enhanced Terminal Style Typing Role */}
        <div style={{
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: isMobile ? "1.3rem" : "1.8rem",
          fontWeight: "400",
          color: "#4ade80",
          height: "80px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 30px",
          background: "rgba(15, 23, 42, 0.8)",
          borderRadius: "12px",
          border: "1px solid rgba(74, 222, 128, 0.3)",
          backdropFilter: "blur(10px)",
          maxWidth: "650px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Terminal window top bar */}
          <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "12px",
            background: "rgba(74, 222, 128, 0.1)",
            borderBottom: "1px solid rgba(74, 222, 128, 0.2)"
          }} />
          
          {/* Terminal dots */}
          <div style={{
            position: "absolute",
            top: "3px",
            left: "15px",
            display: "flex",
            gap: "6px"
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28ca42" }} />
          </div>
          
          <span style={{
            color: "#4ade80",
            marginRight: "15px",
            fontSize: "1.2rem",
            fontWeight: "600"
          }}>$</span>
          
          <span style={{
            color: "#818cf8",
            borderRight: "2px solid #818cf8",
            paddingRight: "10px",
            animation: "blink 1s infinite",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: "300",
            fontSize: isMobile ? "1.2rem" : "1.5rem"
          }}>
            {typedText}
          </span>
          
          {/* Terminal prompt */}
          <span style={{
            color: "#60a5fa",
            marginLeft: "5px",
            opacity: 0.7
          }}>_</span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "1.2rem" : "1.4rem",
          color: "#cbd5e1",
          lineHeight: "1.7",
          marginBottom: "50px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: isMobile ? "0 10px" : "0",
          fontWeight: "300",
          letterSpacing: "0.2px"
        }}>
          Building modern, scalable web applications with clean code and innovative solutions
        </p>

        {/* 3 Highlight Skills */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
          maxWidth: "650px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          
          {/* React Card */}
          <div
            style={{
              padding: "25px 30px",
              background: "rgba(30, 41, 59, 0.7)",
              borderRadius: "16px",
              border: "1px solid rgba(97, 218, 251, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              minWidth: "160px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            <FaReact style={{ fontSize: "3rem", color: "#61DAFB" }} />
            <span style={{
              color: "#61DAFB",
              fontSize: "1.2rem",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              REACT
            </span>
          </div>

          {/* Django Card */}
          <div
            style={{
              padding: "25px 30px",
              background: "rgba(30, 41, 59, 0.7)",
              borderRadius: "16px",
              border: "1px solid rgba(32, 201, 151, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              minWidth: "160px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            <SiDjango style={{ 
              fontSize: "3rem", 
              color: "#20c997"
            }} />
            <span style={{
              color: "#20c997",
              fontSize: "1.2rem",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              DJANGO
            </span>
          </div>

          {/* SQL Card */}
          <div
            style={{
              padding: "25px 30px",
              background: "rgba(30, 41, 59, 0.7)",
              borderRadius: "16px",
              border: "1px solid rgba(68, 121, 161, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              minWidth: "160px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            <FaDatabase style={{ fontSize: "3rem", color: "#4479A1" }} />
            <span style={{
              color: "#4479A1",
              fontSize: "1.2rem",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              DATABASE
            </span>
          </div>

        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "60px"
        }}>
          <a
            href="#projects"
            style={{
              fontFamily: "'Poppins', sans-serif",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(79, 70, 229, 0.3)",
              letterSpacing: "0.5px"
            }}
          >
            View Projects
            <FaArrowRight />
          </a>

          <a
            href="/resume/resume.pdf"
            download
            style={{
              fontFamily: "'Poppins', sans-serif",
              padding: "16px 40px",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.5px"
            }}
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Simple Scroll Indicator */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px"
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "#94a3b8"
          }}>Explore More</span>
          <div style={{
            width: "30px",
            height: "50px",
            border: "2px solid #94a3b8",
            borderRadius: "15px",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "10px",
              background: "#fb923c",
              borderRadius: "2px",
              animation: "scrollDown 2s infinite"
            }} />
          </div>
        </div>

      </div>

      {/* Animations & Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 20px);
            opacity: 0;
          }
        }
        
        /* Hover effects */
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        a:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
        }
        
        a:nth-child(2):hover {
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          #home {
            padding-top: 80px !important;
          }
          
          #home h1 {
            font-size: 2.5rem !important;
          }
          
          .terminal-box {
            padding: 15px 20px !important;
            font-size: 1.1rem !important;
          }
          
          .skill-card {
            min-width: 140px !important;
            padding: 20px !important;
          }
          
          .cta-button {
            padding: 12px 25px !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          #home h1 {
            font-size: 2.2rem !important;
          }
          
          .typing-text {
            font-size: 1rem !important;
          }
          
          .description {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;