import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0", // Soft gray background
        padding: "40px 20px",
        mt: "auto",
        borderTop: "2px solid #E0E0E0",
      }}
    >
      <Box mt={4} />
      <Grid container spacing={4} justifyContent="right">
        {/* Left section - Project description and social icons */}
        <Grid item xs={12} md={3} mr={30}>
          <Typography variant="h5" color="textPrimary" fontWeight="bold">
            variant-net
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            AI-powered service assisting geneticists in diagnosing genetic
            conditions by analyzing patient DNA sequences.
          </Typography>
          {/* Social Media Icons */}
          <Box display="flex" justifyContent="left" mt={2}>
            <IconButton
              href="https://github.com/orgs/variant-net/repositories"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#808080",
                "&:hover": {
                  color: "#008080", // teal blue on hover
                },
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Grid>
        {/* Middle section - Links */}
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            color="textPrimary"
            fontWeight="bold"
            gutterBottom
          >
            Company
          </Typography>
          <Typography variant="body2">
            <Link href="/about" color="textPrimary" underline="hover">
              About
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/features" color="textPrimary" underline="hover">
              Features
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/works" color="textPrimary" underline="hover">
              Works
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/careers" color="textPrimary" underline="hover">
              Career
            </Link>
          </Typography>
        </Grid>
        {/* Help Links */}
        <Grid item xs={6} md={3}>
          <Typography
            variant="h6"
            color="textPrimary"
            fontWeight="bold"
            gutterBottom
          >
            Help
          </Typography>
          <Typography variant="body2">
            <Link href="/support" color="textPrimary" underline="hover">
              Customer Support
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/delivery" color="textPrimary" underline="hover">
              Delivery Details
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/terms" color="textPrimary" underline="hover">
              Terms & Conditions
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy" color="textPrimary" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
      {/* Copyright Section */}
      <Divider sx={{ padding: 2 }} />
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © 2024, All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
