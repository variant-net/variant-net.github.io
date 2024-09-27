import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import TeamMember from "./TeamMember";
import { supervisor, teamMembers } from "../data/team-members";

const MeetTheTeam = () => {
  return (
    <>
      <Box mt={12} />
      <Container>
        <Box mt={2} />
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Meet The Team
        </Typography>
        <Box mt={10} />
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Supervisor
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMember {...supervisor} />
          </Grid>
        </Grid>
        <Box mt={10} />
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Development Team
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box mt={16} />
    </>
  );
};

export default MeetTheTeam;
