import { Container, Grid, Typography, Box } from "@mui/material";
import { supervisor, teamMembers } from "../data/team-members";
import TeamMember from "./TeamMember";
import nodesImageBg from "../assets/bg/nodes-bg.jpeg";

const MeetTheTeam = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${nodesImageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: 20,
          pb: 20,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            Meet The Team
          </Typography>

          <Box mt={10} />

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
              padding: "8px 16px", // Optional padding for better appearance
              borderRadius: "8px", // Optional rounded corners
            }}
          >
            Supervisor
          </Typography>
          <Grid container justifyContent="center" spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <TeamMember {...supervisor} />
              </Box>
            </Grid>
          </Grid>

          <Box mt={10} />

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
              padding: "8px 16px", // Optional padding for better appearance
              borderRadius: "8px", // Optional rounded corners
            }}
          >
            Development Team
          </Typography>
          <Grid container justifyContent="center" spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <TeamMember {...member} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MeetTheTeam;
