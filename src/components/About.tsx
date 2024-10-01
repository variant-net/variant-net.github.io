import React from "react";
import { Box, Typography } from "@mui/material";
import BilkentAmblemIng from "../assets/bg/amblem-ing.png";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0", // soft gray
        paddingX: "20%",
        paddingY: "15rem",
        textAlign: "center",
        position: "relative", // Add this to enable absolute positioning inside
        overflow: "hidden", // Ensure no overflow issues with the image
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ color: "#808080" }} // teal blue
      >
        CS491/492
      </Typography>
      <img
        src={BilkentAmblemIng}
        alt="Bilkent University Logo"
        style={{
          width: "450px", // Adjust the size as needed
          height: "450px", // Adjust the size as needed
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          opacity: 0.1, // Make the image more subtle
        }}
      />
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{ color: "#008080", fontWeight: "bold", zIndex: 1 }} // Ensure text appears in front
      >
        About Senior Design Project @ Bilkent University
      </Typography>
      <Box mt={3} />
      <Typography
        variant="body1"
        sx={{ color: "#333", padding: "30px", fontSize: 20, zIndex: 1 }} // Ensure text appears in front
      >
        <strong>
          The CS491/492 Senior Design Project is a year-long capstone course
          designed for senior students of the Computer Engineering department at
          Bilkent University. This course aims to bridge the gap between
          academic knowledge and real-world application by encouraging students
          to work on large-scale projects, often in collaboration with industry
          partners or research institutions.
        </strong>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#333", padding: "30px", fontSize: 20, zIndex: 1 }} // Ensure text appears in front
      >
        <strong>
          Throughout the year, students apply their knowledge in software
          engineering, algorithm design, artificial intelligence, and other
          relevant areas to develop innovative solutions to complex problems.
          The project culminates in a series of deliverables, including detailed
          reports, presentations, and a working prototype or software product.
          The CS491/492 course provides students with hands-on experience in
          project management, teamwork, and technical problem-solving, preparing
          them for their future careers in the tech industry or academia.
        </strong>
      </Typography>

      {/* Add link to the official course page */}
      <Typography
        variant="body1"
        sx={{ color: "#333", padding: "30px", fontSize: 20, zIndex: 1 }} // Ensure text appears in front
      >
        To learn more about the CS491/492 Senior Design Project,
        visit the official course page{" "}
        <a
          href="https://www.cs.bilkent.edu.tr/~cs4912/current/index.html"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#008080", textDecoration: "underline" }}
        >
          here
        </a>
        .
      </Typography>
    </Box>
  );
};

export default About;
