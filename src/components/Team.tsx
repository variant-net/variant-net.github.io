import {
  Container,
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import TeamMember from "./TeamMember";
import { supervisor, teamMembers } from "../TeamMembers";

const MeetTheTeam = () => {
  return (
    <>
      <Box mt={2} />
      {/* AppBar for the top logo and title */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            variant-net
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        <Box mt={2} />
        <Typography variant="h3" align="center" gutterBottom>
          Meet The Team
        </Typography>
        <Box mt={10} />
        <Typography variant="h4" align="center" gutterBottom>
          Supervisor
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMember {...supervisor} />
          </Grid>
        </Grid>
        <Box mt={10} />
        <Typography variant="h4" align="center" gutterBottom>
          Team Members
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box mt={12} />
      {/* Footer */}
      <Box component="footer" sx={{ py: 3, mt: 5 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} variant-net. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default MeetTheTeam;
