import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  // Track scroll for active link
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "home";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    const nav = document.getElementById("navbarNav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#home" onClick={closeMenu}>
          Pavan
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#home"
                onClick={closeMenu}
                className={`nav-link ${active === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={closeMenu}
                className={`nav-link ${active === "about" ? "active" : ""}`}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={closeMenu}
                className={`nav-link ${active === "skills" ? "active" : ""}`}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                onClick={closeMenu}
                className={`nav-link ${active === "projects" ? "active" : ""}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#education"
                onClick={closeMenu}
                className={`nav-link ${active === "education" ? "active" : ""}`}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={closeMenu}
                className={`nav-link ${active === "contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </li> 
  
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
