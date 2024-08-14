import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ml from "../../Assets/Projects/ml.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Classification of Brain Tumors"
              description="Glioblastoma, a common and aggressive brain tumor in adults, has a poor prognosis with an average survival of less than a year. Scientists have identified that MGMT promoter methylation in the tumor's genetics can improve survival and predict chemotherapy response. Currently, genetic analysis requires tumor biopsy and takes weeks, often necessitating additional surgeries. If radiogenomics could predict genetic information from images, it could minimize surgeries and guide more effective treatment."
              ghLink="https://github.com/Muhammed-tr/classification-of-brain-tumor-mri-Resnet18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Speech-Emotion-Recognition-Based Travel Guide Assistant"
              description="We developed a travel guide assistant that uses speech emotion recognition to analyze users' emotional states. Based on their emotions, the assistant suggests places to visit, recommends events, and displays topics of interest that are aligned with their current mood."
              ghLink="https://github.com/Muhammed-tr/speech-emotion-recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="anime recommendation systems"
              description="Explored various techniques and algorithms in data mining relevant to the recommendation system domain. -Gathered and preprocessed anime dataset(s) to prepare them for analysis and modeling. -Implemented user-based collaborative filtering to recommend anime based on user preferences and similarities."
              ghLink="https://github.com/Muhammed-tr/Team6_DataCinephiles"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Rent-A-Car-OOP"
              description="This project, Rent-A-Car-OOP, is an object-oriented C# application that simulates a car rental system. It allows users to manage car rentals, including features for adding, updating, and deleting vehicle listings. The system implements core functionalities such as user registration, rental transactions, and price calculations, providing a comprehensive solution for managing a car rental business efficiently."
              ghLink="https://github.com/Muhammed-tr/Rent-A-Car-OOP-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Earthquake and Disaster Alert Web Application"
              description="Developed a web application using JavaScript that leverages API data to monitor earthquake and disaster events. The application provides personalized notifications to users if an earthquake or disaster occurs near them, offering timely alerts and safety information."
              ghLink="https://github.com/Muhammed-tr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Overview of React Projects"
              description="In my React projects, including Papilon, I focus on creating user-friendly interfaces and efficient data management solutions. I leverage modern technologies and best practices to ensure high-quality applications, while addressing challenges through innovative problem-solving strategies."
              ghLink="https://papilon.com.tr/tr/urunler"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Temperature, CO2 Emissions, and Sea Level Trends"
              description="This project investigates the relationship between climate change indicators such as temperature variations, CO2 emissions, and sea level rise. Utilizing multiple datasets spanning several decades, we visualize global and regional trends using advanced data visualization tools like Plotly and Seaborn. Through statistical analysis and regression models, we predict future changes and explore the potential impact on our environment. This study aims to raise awareness and contribute to the understanding of climate change and its effects on our planet's future."
              ghLink="https://github.com/Muhammed-tr"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
