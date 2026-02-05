import React from "react";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          Certifications
        </h2>

        <div className="row justify-content-center">
          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.id}
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
              >
                {/* SAME HEIGHT CARD */}
                <div className="glass-card h-100 text-center p-4 d-flex flex-column">
                  
                  {/* ICON / LOGO */}
                  <div className="mb-3">
                    {cert.iconType === "icon" && Icon && (
                      <Icon
                        size={48}
                        style={{ color: cert.color || "inherit" }}
                      />
                    )}

                    {cert.iconType === "image" && (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        style={{
                          height: "48px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>

                  {/* TITLE */}
                  <h5 className="fw-bold mb-4">
                    {cert.title}
                  </h5>

                  {/* BUTTON — ONLY IF CERTIFICATE EXISTS */}
                  {cert.certificate && (
                    <div className="mt-auto">
                      <a
                        href={cert.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent btn-sm"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
