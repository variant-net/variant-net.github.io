import { Box, Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dnaVideoBg from "../assets/videos/dna-bg.mp4";

const VideoBackground = () => {
  const scrollToNextSectionAuto = () => {
    if (window.scrollY > window.innerHeight / 2) {
      return;
    }

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        onEnded={scrollToNextSectionAuto}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.7",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={dnaVideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Static Text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h4">Welcome to</Typography>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          variant-net
        </Typography>
        <Typography variant="h5" sx={{ fontStyle: "italic" }}>
          /ˈvɛə.ri.ənt nɛt/
        </Typography>
      </Box>
      {/* Scroll Down Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20, // Adjust as needed
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          opacity: 0.6,
        }}
      >
        <Typography>Scroll Down</Typography>
        <IconButton
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          sx={{ color: "white", opacity: 0.6 }}
        >
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoBackground;
