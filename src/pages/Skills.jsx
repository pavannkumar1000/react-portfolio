import React, { useState, useEffect } from "react";
import skills from "../data/skills";
import { FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (section) observer.unobserve(section);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: isMobile ? "60px 20px" : "100px 20px",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        borderRadius: "50%"
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "5%",
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        borderRadius: "50%"
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: "2"
      }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "60px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "25px",
            marginBottom: "20px",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}>
            <span style={{
              color: "#3b82f6",
              fontWeight: "700",
              fontSize: "0.85rem",
              letterSpacing: "2px"
            }}>
              TECHNICAL SKILLS
            </span>
          </div>
          
          <h2 style={{
            fontSize: isMobile ? "2.2rem" : "3.2rem",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "15px",
            lineHeight: "1.2"
          }}>
            My <span style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Tech Stack
            </span>
          </h2>
          
          <p style={{
            fontSize: isMobile ? "1.1rem" : "1.2rem",
            color: "#475569",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Category Tabs - Desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "50px",
              padding: "0 20px"
            }}
          >
            {skills.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;
              const categoryColor = category.items[0]?.color || "#3b82f6";
              
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(index)}
                  style={{
                    padding: "14px 28px",
                    background: isActive 
                      ? `linear-gradient(135deg, ${categoryColor}, ${categoryColor}dd)` 
                      : "rgba(255, 255, 255, 0.9)",
                    color: isActive ? "white" : "#475569",
                    border: `2px solid ${isActive ? categoryColor : "#e2e8f0"}`,
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    boxShadow: isActive 
                      ? `0 10px 30px ${categoryColor}40` 
                      : "0 4px 15px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <Icon style={{ 
                    fontSize: "20px", 
                    color: isActive ? "white" : categoryColor
                  }} />
                  <span>{category.category}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Skills Display */}
        <div style={{ minHeight: "400px" }}>
          {/* Desktop - Fixed with centered last row */}
          {!isMobile && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "25px",
                  justifyContent: "center",
                  padding: "20px",
                  width: "100%"
                }}
              >
                {skills[activeCategory].items.map((skill, index) => {
                  const Icon = skill.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      style={{
                        width: "180px",
                        flexShrink: 0
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                          background: "rgba(255, 255, 255, 0.95)",
                          padding: "30px 20px",
                          borderRadius: "20px",
                          border: `1px solid ${skill.color}30`,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "20px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                          position: "relative",
                          overflow: "hidden",
                          cursor: "pointer",
                          backdropFilter: "blur(10px)",
                          height: "100%",
                          minHeight: "220px"
                        }}
                      >
                        {/* Infinite Rotating Border */}
                        <motion.div
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "20px",
                            padding: "2px",
                            background: `conic-gradient(from 0deg, transparent, ${skill.color}, transparent)`,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            opacity: 0.7
                          }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Lightning Effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            top: "-50%",
                            left: "-50%",
                            width: "200%",
                            height: "200%",
                            background: `linear-gradient(45deg, transparent 30%, ${skill.color}20 50%, transparent 70%)`,
                            transform: "rotate(45deg)",
                            zIndex: 1
                          }}
                        />

                        {/* Logo */}
                        <div style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "20px",
                          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "36px",
                          color: skill.color,
                          position: "relative",
                          zIndex: 2,
                          boxShadow: `0 8px 25px ${skill.color}20`,
                          border: `1px solid ${skill.color}30`
                        }}>
                          <Icon />
                        </div>

                        {/* Skill Name */}
                        <span style={{
                          fontSize: "1.1rem",
                          fontWeight: "700",
                          color: skill.color,
                          textAlign: "center",
                          position: "relative",
                          zIndex: 2
                        }}>
                          {skill.name}
                        </span>

                        {/* Floating Particles */}
                        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              style={{
                                position: "absolute",
                                width: "3px",
                                height: "3px",
                                background: skill.color,
                                borderRadius: "50%",
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 20}%`,
                              }}
                              animate={{
                                y: [0, -15, 0],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* Mobile */}
          {isMobile && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              style={{ width: "100%" }}
            >
              {skills.map((category, catIndex) => {
                const CategoryIcon = category.icon;
                const categoryColor = category.items[0]?.color || "#3b82f6";
                
                return (
                  <motion.div 
                    key={catIndex} 
                    variants={itemVariants}
                    style={{ marginBottom: "40px" }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "25px",
                      padding: "15px",
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "15px",
                      borderLeft: `5px solid ${categoryColor}`,
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: categoryColor
                      }}>
                        <CategoryIcon style={{ fontSize: "20px" }} />
                      </div>
                      <h3 style={{
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "#0f172a",
                        margin: "0"
                      }}>
                        {category.category}
                      </h3>
                    </div>
                    
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "15px",
                      justifyContent: "center"
                    }}>
                      {category.items.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        const totalItems = category.items.length;
                        const itemsPerRow = 2;
                        const itemsInLastRow = totalItems % itemsPerRow;
                        
                        return (
                          <motion.div
                            key={skillIndex}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            style={{
                              background: "rgba(255, 255, 255, 0.95)",
                              padding: "20px 15px",
                              borderRadius: "15px",
                              border: `1px solid ${skill.color}30`,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "15px",
                              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                              width: "calc(50% - 8px)",
                              maxWidth: "150px",
                              position: "relative",
                              overflow: "hidden",
                              cursor: "pointer",
                              // Center last item if odd number
                              ...(itemsInLastRow === 1 && skillIndex === totalItems - 1 && {
                                marginLeft: "calc(25% + 4px)",
                                marginRight: "calc(25% + 4px)"
                              })
                            }}
                          >
                            {/* Infinite Border */}
                            <motion.div
                              style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "15px",
                                padding: "2px",
                                background: `conic-gradient(from 0deg, transparent, ${skill.color}, transparent)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                                opacity: 0.7
                              }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Logo */}
                            <div style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "12px",
                              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              color: skill.color,
                              position: "relative",
                              zIndex: 1,
                              border: `1px solid ${skill.color}30`
                            }}>
                              <Icon />
                            </div>

                            {/* Skill Name */}
                            <span style={{
                              fontSize: "0.95rem",
                              fontWeight: "600",
                              color: skill.color,
                              textAlign: "center",
                              position: "relative",
                              zIndex: 1
                            }}>
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Cloud Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          style={{
            marginTop: "80px",
            padding: isMobile ? "25px" : "40px",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))",
            borderRadius: "25px",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px"
            }}>
              <FaCloud style={{ fontSize: isMobile ? "24px" : "32px" }} />
              <h3 style={{
                fontSize: isMobile ? "1.4rem" : "1.8rem",
                fontWeight: "700",
                margin: 0
              }}>
                Cloud Technology Focus
              </h3>
            </div>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto 25px auto"
            }}>
              Specializing in <strong>AWS Cloud Services</strong> for scalable cloud solutions. 
              Learning cloud-native development and serverless architecture.
            </p>
            
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginTop: "20px"
            }}>
              {["Cloud Computing", "Scalable Architecture", "Future-Ready Tech"].map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    padding: "8px 18px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "25px",
                    fontSize: isMobile ? "0.85rem" : "0.95rem",
                    fontWeight: "500",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;