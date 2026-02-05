import education from "../data/education";

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Education</h2>

        <div className="row justify-content-center">
          {education.map((edu) => (
            <div key={edu.id} className="col-md-6 mb-4" data-aos="fade-up">
              <div className="glass-card d-flex align-items-start p-4" style={{borderLeft: "5px solid var(--blue)"}}>
                <div className="display-4 me-3">{edu.icon}</div>
                <div>
                  <h5 className="fw-bold">{edu.degree}</h5>
                  <p>{edu.college}</p>
                  {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                  {edu.marks && <p>{edu.marks}</p>}
                  <p className="text-muted">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
