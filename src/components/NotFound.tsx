import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10); // Initial countdown value of 10 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Decrease countdown every second

    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 10000); // Redirect after 10 seconds

    return () => {
      clearInterval(timer); // Cleanup timer interval
      clearTimeout(redirectTimeout); // Cleanup redirect timeout
    };
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        color: "#008080",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "72px", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        <strong>
          Oops! It seems the page you're looking for doesn't exist.
        </strong>
      </Typography>
      <Typography variant="body1">
        Redirecting to the home page in {countdown} seconds...
      </Typography>
    </Box>
  );
};

export default NotFound;
