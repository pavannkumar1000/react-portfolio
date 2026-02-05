import React, { useState, useEffect } from "react";
import { 
  FaRocket, 
  FaGraduationCap,
  FaLightbulb,
  FaBook,
  FaHandshake,
  FaBullseye,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger animations when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const strengths = [
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "Breaking down complex problems into manageable solutions",
      color: "#3b82f6"
    },
    {
      icon: <FaBook />,
      title: "Quick Learner",
      description: "Fast at picking up new technologies and concepts",
      color: "#10b981"
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative",
      description: "Work effectively in teams with clear communication",
      color: "#8b5cf6"
    },
    {
      icon: <FaBullseye />,
      title: "Goal-Oriented",
      description: "Focused on delivering results and meeting objectives",
      color: "#f59e0b"
    }
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Coding Challenges",
    "Latest Tech",
    "Project Building"
  ];

  // Animation for cards on scroll
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section id="about" style={{
      padding: isMobile ? "60px 20px" : "80px 0",
      background: "#ffffff",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: isMobile ? "100px" : "200px",
        height: isMobile ? "100px" : "200px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "pulse 4s ease-in-out infinite"
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "5%",
        width: isMobile ? "80px" : "150px",
        height: isMobile ? "80px" : "150px",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "pulse 5s ease-in-out infinite reverse"
      }} />

      <div className="container" style={{ 
        position: "relative", 
        zIndex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "0" : "0 20px"
      }}>
        
        {/* Section Header */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: isMobile ? "40px" : "60px" 
        }}>
          <div className="animate-on-scroll" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: isMobile ? "8px 20px" : "10px 25px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "25px",
            marginBottom: "20px",
            opacity: "0",
            transform: "translateY(20px)",
            transition: "all 0.6s ease"
          }}>
            <FaGraduationCap style={{ color: "#3b82f6" }} />
            <span style={{
              color: "#3b82f6",
              fontWeight: "600",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              letterSpacing: "1px"
            }}>
              ABOUT ME
            </span>
          </div>
          
          <h2 className="animate-on-scroll" style={{
            fontSize: isMobile ? "2rem" : "2.8rem",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "15px",
            opacity: "0",
            transform: "translateY(20px)",
            transition: "all 0.6s ease 0.1s"
          }}>
            Let Me <span style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Introduce</span> Myself
          </h2>
          
          <p className="animate-on-scroll" style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            opacity: "0",
            transform: "translateY(20px)",
            transition: "all 0.6s ease 0.2s"
          }}>
            Passionate developer creating meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "50px",
          alignItems: "start"
        }}>
          
          {/* Left Column - Personal Introduction */}
          <div>
            <div className="animate-on-scroll" style={{
              background: "white",
              padding: isMobile ? "25px" : "40px",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #f3f4f6",
              opacity: animated ? "1" : "0",
              transform: animated ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease 0.1s"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "12px" : "15px",
                marginBottom: isMobile ? "20px" : "25px"
              }}>
                <div style={{
                  width: isMobile ? "50px" : "60px",
                  height: isMobile ? "50px" : "60px",
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "700",
                  animation: "gradientShift 3s ease-in-out infinite alternate"
                }}>
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 style={{
                    fontSize: isMobile ? "1.5rem" : "1.8rem",
                    fontWeight: "700",
                    color: "#1f2937",
                    margin: "0 0 5px 0"
                  }}>
                    Pavan Kumar
                  </h3>
                  <p style={{
                    color: "#6b7280",
                    margin: "0",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Computer Science Graduate • Web Developer
                  </p>
                </div>
              </div>

              <div style={{ color: "#4b5563", lineHeight: "1.8" }}>
                <p style={{ 
                  marginBottom: isMobile ? "15px" : "20px", 
                  fontSize: isMobile ? "1rem" : "1.05rem" 
                }}>
                  Hello! I'm a <strong style={{ color: "#3b82f6" }}> Computer Science graduate </strong> 
                  passionate about web development. I love transforming ideas into 
                  interactive applications that provide real value to users.
                </p>
                
                <p style={{ 
                  marginBottom: isMobile ? "15px" : "20px", 
                  fontSize: isMobile ? "1rem" : "1.05rem" 
                }}>
                  My journey started with programming fundamentals, and I've developed 
                  a strong interest in building modern web applications. I enjoy the 
                  creative process of problem-solving and bringing designs to life.
                </p>
                
                <p style={{ 
                  fontSize: isMobile ? "1rem" : "1.05rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#3b82f6",
                  fontWeight: "500"
                }}>
                  <FaArrowRight /> Always learning and growing as a developer
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="animate-on-scroll" style={{
              marginTop: "30px",
              padding: isMobile ? "20px" : "25px",
              background: "rgba(245, 158, 11, 0.05)",
              borderRadius: "15px",
              border: "1px solid rgba(245, 158, 11, 0.1)",
              opacity: animated ? "1" : "0",
              transform: animated ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease 0.2s"
            }}>
              <h4 style={{
                fontSize: isMobile ? "1.1rem" : "1.2rem",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <FaRocket style={{ color: "#f59e0b" }} />
                Areas of Interest
              </h4>
              
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? "8px" : "10px"
              }}>
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    style={{
                      padding: isMobile ? "6px 14px" : "8px 18px",
                      background: "white",
                      borderRadius: "20px",
                      color: "#f59e0b",
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      fontWeight: "500",
                      border: "1px solid rgba(245, 158, 11, 0.3)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      transition: "all 0.3s ease",
                      opacity: animated ? "1" : "0",
                      transform: animated ? "translateY(0)" : "translateY(10px)",
                      animationDelay: `${index * 0.1}s`
                    }}
                    className={animated ? "interest-tag" : ""}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = "#f59e0b";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#f59e0b";
                        e.currentTarget.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Strengths */}
          <div>
            {/* Strengths Grid */}
            <div>
              <h4 className="animate-on-scroll" style={{
                fontSize: isMobile ? "1.2rem" : "1.3rem",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "25px",
                paddingLeft: "10px",
                borderLeft: "4px solid #3b82f6",
                opacity: animated ? "1" : "0",
                transform: animated ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s"
              }}>
                My Development Approach
              </h4>
              
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: isMobile ? "15px" : "20px"
              }}>
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll strength-card"
                    style={{
                      background: "white",
                      padding: isMobile ? "20px" : "25px",
                      borderRadius: "15px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                      borderTop: "3px solid",
                      borderTopColor: strength.color,
                      opacity: animated ? "1" : "0",
                      transform: animated ? "translateY(0)" : "translateY(30px)",
                      transition: `all 0.6s ease ${0.4 + (index * 0.1)}s`
                    }}
                    onMouseEnter={() => !isMobile && setHoveredCard(index)}
                    onMouseLeave={() => !isMobile && setHoveredCard(null)}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: isMobile ? "12px" : "15px",
                      marginBottom: "15px"
                    }}>
                      <div style={{
                        width: isMobile ? "40px" : "45px",
                        height: isMobile ? "40px" : "45px",
                        borderRadius: "12px",
                        background: `${strength.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isMobile ? "18px" : "20px",
                        color: strength.color,
                        animation: "iconFloat 3s ease-in-out infinite"
                      }}>
                        {strength.icon}
                      </div>
                      <h5 style={{
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: "0"
                      }}>
                        {strength.title}
                      </h5>
                    </div>
                    
                    <p style={{
                      color: "#6b7280",
                      fontSize: isMobile ? "0.9rem" : "0.95rem",
                      lineHeight: "1.6",
                      margin: "0"
                    }}>
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="animate-on-scroll" style={{
              marginTop: isMobile ? "30px" : "40px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              padding: isMobile ? "25px" : "30px",
              borderRadius: "20px",
              color: "white",
              position: "relative",
              overflow: "hidden",
              opacity: animated ? "1" : "0",
              transform: animated ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease 0.7s"
            }}>
              <div style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                fontSize: isMobile ? "80px" : "120px",
                opacity: "0.1",
                color: "white",
                animation: "slowRotate 20s linear infinite"
              }}>
                <FaUsers />
              </div>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <h4 style={{
                  fontSize: isMobile ? "1.2rem" : "1.3rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <FaRocket />
                  Looking Forward
                </h4>
                
                <p style={{
                  fontSize: isMobile ? "1rem" : "1.05rem",
                  lineHeight: "1.7",
                  opacity: "0.95",
                  marginBottom: "20px"
                }}>
                  Eager to contribute to impactful projects, learn from experienced 
                  developers, and grow professionally in a collaborative environment.
                </p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: isMobile ? "8px" : "10px"
                }}>
                  <span style={{
                    padding: "6px 15px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    fontSize: isMobile ? "0.8rem" : "0.85rem",
                    backdropFilter: "blur(10px)"
                  }}>
                    Continuous Learning
                  </span>
                  <span style={{
                    padding: "6px 15px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    fontSize: isMobile ? "0.8rem" : "0.85rem",
                    backdropFilter: "blur(10px)"
                  }}>
                    Team Contribution
                  </span>
                  <span style={{
                    padding: "6px 15px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    fontSize: isMobile ? "0.8rem" : "0.85rem",
                    backdropFilter: "blur(10px)"
                  }}>
                    Build Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes slowRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .gradient-icon {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite alternate;
        }

        /* Hover effects for strength cards */
        .strength-card {
          transition: all 0.3s ease !important;
        }

        .strength-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
        }

        .interest-tag {
          animation: fadeInUp 0.5s ease forwards;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 15px;
          }
          
          .animate-on-scroll {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          .strength-card {
            transition: none !important;
          }
        }

        /* Touch feedback for mobile */
        @media (hover: none) and (pointer: coarse) {
          .strength-card:active {
            transform: scale(0.98) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;