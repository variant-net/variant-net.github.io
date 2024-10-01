import React from "react";
import { Box, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ProjectOverview: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0", // soft gray
        padding: "20%",
        textAlign: "center",
        borderTop: "2px solid #E0E0E0",
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
          variant-net is a tool designed to assist geneticists and medical
          professionals in diagnosing genetic conditions by analyzing patient
          DNA sequences alongside with phenotypic data. This project is part of
          the CS491/2 Senior Design Project at Bilkent University, aiming to
          provide an accessible and efficient AI-powered solution to streamline
          genetic diagnosis.
        </strong>
      </Typography>

      {/* GitHub Icon Button */}
      <Box mt={3}>
        <AutoAwesomeIcon fontSize="large" sx={{ color: "#008080" }} />
      </Box>
    </Box>
  );
};

export default ProjectOverview;
