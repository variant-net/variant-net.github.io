import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import ScienceIcon from "@mui/icons-material/Science";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BarChartIcon from "@mui/icons-material/BarChart";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";

const colors = {
  tealBlue: "#008080",
  crimsonRed: "#DC143C",
  skyBlue: "#87CEEB",
  limeGreen: "#32CD32",
  mintGreen: "#98FF98",
  steelBlue: "#4682B4",
};

const features = [
  {
    title: "Gene Variant Analysis",
    icon: <ScienceIcon />,
    description:
      "AI-powered analysis of genetic variants to aid in diagnosing rare genetic conditions.",
  },
  {
    title: "Phenotype Matching",
    icon: <CompareArrowsIcon />,
    description:
      "Efficiently matches patient phenotypes to possible genetic disorders for accurate diagnosis.",
  },
  {
    title: "Data Visualization",
    icon: <BarChartIcon />,
    description:
      "Interactive data visualizations of gene mutations and their effects for better understanding.",
  },
  {
    title: "Clinical Decision Support",
    icon: <MedicalServicesIcon />,
    description:
      "Provides recommendations and insights to assist medical professionals in making informed decisions.",
  },
  {
    title: "Automated Reporting",
    icon: <DescriptionIcon />,
    description:
      "Generates detailed reports summarizing the results of genetic analyses for medical records.",
  },
  {
    title: "Gene-Condition Database",
    icon: <StorageIcon />,
    description:
      "Access to a constantly updated database of genes and their associated conditions for reference.",
  },
];

const FeatureCards = () => {
  return (
    <Box
      sx={{
        paddingBottom: "20rem",
        paddingX: "20rem",
        backgroundColor: "#F0F0F0",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ color: "#008080", fontWeight: "bold", paddingBottom: 5 }} // teal blue
      >
        Features Overview
      </Typography>
      {/* Soft gray background */}
      <Grid container spacing={8}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "3px solid #f0f0f0", // Light gray border
                borderRadius: "12px", // Softer edges
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                "&:hover": {
                  transform: "translateY(-5px)", // Lift on hover
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    fontSize: "60px",
                    marginBottom: "15px",
                    color: colors.tealBlue,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "600", color: colors.steelBlue }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "#6c757d", fontSize: "15px" }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCards;
