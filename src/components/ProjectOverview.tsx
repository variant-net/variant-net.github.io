import React from "react";
import { Box, Typography } from "@mui/material";
import dnaSVG from "../assets/svg/dna.svg";
import About from "./About";

const ProjectOverview: React.FC = () => {
  return (
    <>
      <About />
      <Box
        sx={{
          backgroundColor: "#F0F0F0", // soft gray
          paddingX: "20%",
          paddingBottom: "20rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ color: "#808080" }} // teal blue
        >
          variant-net
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ color: "#008080", fontWeight: "bold" }} // teal blue
        >
          Project Overview
        </Typography>
        <Box mt={5} />
        <Typography
          variant="body1"
          sx={{ color: "#333", padding: "30px", fontSize: 20 }} // dark text for readability
        >
          <strong>
            <span style={{ color: "rgb(0, 128, 128)", fontStyle: "italic" }}>
              variant-net
            </span>{" "}
            is an AI-powered platform designed to assist geneticists and medical
            professionals in diagnosing genetic conditions. By analyzing patient
            DNA sequences and provided phenotypic information, variant-net
            identifies potential gene-disease associations, streamlining the
            process of uncovering underlying genetic factors. Our goal is to
            empower medical experts with cutting-edge tools that enhance
            accuracy and efficiency in genetic diagnostics, contributing to the
            advancement of personalized medication and treatment.
          </strong>
        </Typography>
        <Box mt={3}>
          <img src={dnaSVG} width="50" height="50" alt="DNA strand" />
        </Box>
      </Box>
    </>
  );
};

export default ProjectOverview;
