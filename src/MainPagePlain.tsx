import { teamMembers, supervisor } from "./data/team-members";
import { files } from "./data/files";

const MainPagePlain = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      {/* Header */}
      <div>
        <h1>variant-net</h1>
        <p>/ˈvɛə.ri.ənt nɛt/</p>
      </div>

      {/* Project Overview */}
      <section>
        <h2>Project Overview</h2>
        <p>
          variant-net is a tool designed to assist geneticists and medical
          professionals in diagnosing genetic conditions by analyzing patient
          DNA sequences alongside with phenotypic data. This project is part of
          the CS491/2 Senior Design Project at Bilkent University, aiming to
          provide an accessible and efficient AI-powered solution to streamline
          genetic diagnosis.
        </p>
      </section>

      {/* Documents */}
      <section>
        <h2>The Deliverables</h2>
        <p>
          The deliverables for the project will be uploaded here as they become
          available.
        </p>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a href={file.link} download>
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Members */}
      <section>
        <h2>Supervisor</h2>
        <strong>
          {supervisor.name} - <a href={supervisor.linkedInUrl}>LinkedIn</a>
        </strong>
        <h2>Team Members</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong> -{" "}
              <a href={member.linkedInUrl}>LinkedIn</a> |{" "}
              <a href={member.githubUrl}>GitHub</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MainPagePlain;
