import React, { useState, useEffect } from "react";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaCode
} from "react-icons/fa";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate last row centering
  const gridColumns = isMobile ? 1 : 2;
  const totalProjects = projects.length;
  const isLastRowSingle = totalProjects % gridColumns === 1 && !isMobile;
  const lastItemIndex = totalProjects - 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Colors
  const colors = {
    primary: "#2563eb",
    secondary: "#7c3aed",
    dark: "#0f172a",
    card: "#1e293b",
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      muted: "#94a3b8"
    }
  };

  // Open project link
  const openProjectLink = (url) => {
    if (url && !url.includes("will be added")) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Unified button style function
// Subtle shadow by default, bright shadow on hover will be applied via framer-motion
const createButtonStyle = (maxWidth = "300px") => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "14px 28px",
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  color: "white",
  borderRadius: "14px",
  fontFamily: "'Inter', sans-serif",
  fontWeight: "600",
  fontSize: "0.95rem",
  width: "100%",
  maxWidth: maxWidth,
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  boxShadow: "0 2px 6px rgba(37, 99, 235, 0.15)", // subtle default shadow
});



  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: isMobile ? "60px 20px" : "100px 20px",
        background: colors.dark,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "50px" : "80px" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: isMobile ? "2.5rem" : "3.5rem",
            fontWeight: "800",
            color: colors.text.primary,
            marginBottom: "15px",
            lineHeight: "1.2"
          }}>
            My <span style={{ color: colors.primary }}>Projects</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "1.1rem" : "1.2rem",
            color: colors.text.secondary,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            A showcase of my work and development projects
          </p>
        </div>
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "30px" : "40px",
            marginBottom: "80px"
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                ...(isLastRowSingle && index === lastItemIndex && !isMobile && {
                  gridColumn: "1 / -1",
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  margin: "0 auto"
                })
              }}
            >
              <div style={{
                background: colors.card,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}>
                
                {/* Project Header */}
                <div style={{
                  padding: "30px 30px 20px",
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px"
                  }}>
                    <div style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: "white"
                    }}>
                      <FaCode />
                    </div>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "18px",
                        textDecoration: "none"
                      }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                  
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "10px"
                  }}>
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div style={{
                  padding: "30px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: colors.text.secondary,
                    lineHeight: "1.6",
                    marginBottom: "25px",
                    flex: 1
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div style={{ marginBottom: "25px" }}>
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: colors.text.muted,
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      Technologies
                    </h4>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px"
                    }}>
                      {project.tech.map((tech, techIndex) => {
                        const Icon = tech.icon;
                        return (
                          <motion.div
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: `0 0 12px ${tech.color}`
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 12 }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "8px 12px",
                              background: "rgba(30, 41, 59, 0.8)",
                              borderRadius: "10px",
                              border: `1px solid ${tech.color}`,
                              color: tech.color
                            }}
                          >
                            <Icon style={{ fontSize: "16px", color: tech.color }} />
                            <span style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.85rem",
                              fontWeight: "600",
                              color: tech.color
                            }}>{tech.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Project Button */}
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "auto" }}>
                    <motion.button
  onClick={() => openProjectLink(project.live)}
  whileHover={
    project.live.includes("will be added")
      ? {}
      : {
          scale: 1.03,                 // slight pop
          filter: "brightness(1.15)",  // small light effect
        }
  }
  whileTap={{ scale: 0.95 }}
  disabled={project.live.includes("will be added")}
  style={{
    ...createButtonStyle("300px"),
    opacity: project.live.includes("will be added") ? 0.7 : 1,
    cursor: project.live.includes("will be added") ? "not-allowed" : "pointer",
    pointerEvents: project.live.includes("will be added") ? "none" : "auto",
  }}
>
  <FaExternalLinkAlt style={{ fontSize: "16px" }} />
 <span>
  {project.live.includes("will be added") 
    ? "Coming Soon" 
    : project.title.includes("E-Commerce") || project.title.includes("Bus Booking")
      ? "Watch Demo"
      : "View Project"
  }
</span>

</motion.button>


                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA Section */}
        <div style={{
          textAlign: "center",
          padding: isMobile ? "40px 25px" : "60px 40px",
          background: colors.card,
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
        }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: colors.text.primary
          }}>
            Want to see more?
          </h3>
          
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: colors.text.secondary,
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.6"
          }}>
            Check out my GitHub for more projects and code samples
          </p>
          
         <motion.button
  onClick={() => window.open("https://github.com/pavannkumar1000", "_blank", "noopener,noreferrer")}
  whileHover={{
    scale: 1.03,
    filter: "brightness(1.15)"
  }}
  whileTap={{ scale: 0.95 }}
  style={{
    ...createButtonStyle("100%"), // Full width button
    fontSize: "1rem",
    padding: "16px 32px",
    gap: "12px",
    maxWidth: "500px",
  }}
>
  <FaGithub style={{ fontSize: "20px" }} />
  <span>Explore My GitHub</span>
</motion.button>

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
