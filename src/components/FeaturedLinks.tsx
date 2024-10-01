import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PublicIcon from "@mui/icons-material/Public";

const links = [
  {
    text: "GitHub Repository",
    link: "https://github.com/variant-net",
    icon: <GitHubIcon />,
  },
  {
    text: "Student Logbooks",
    link: "/#/logbooks",
    icon: <LibraryBooksIcon />,
  },
  {
    text: "No-styled Website",
    link: "/#/no-style",
    icon: <PublicIcon />,
  },
];

const FeaturedLinks = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        paddingX: "20rem",
        paddingBottom: "22rem",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{ color: "#008080", fontWeight: "bold", textAlign: "center" }} // teal blue
      >
        Featured Links
      </Typography>
      <Stack spacing={2}>
        {links.map((item, index) => (
          <Button
            key={index}
            href={item.link}
            variant="outlined"
            fullWidth
            sx={{
              justifyContent: "space-between",
              borderRadius: "30px",
              padding: "10px 20px",
              textTransform: "none",
              borderColor: "gray",
              color: "black",
              fontSize: "1rem",
              "&:hover": {
                borderColor: "#008080", // Teal blue border on hover
                backgroundColor: "#008080", // Teal blue background on hover
                color: "white", // Text color on hover
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  backgroundColor: "#f0f0f0",
                  mr: 2,
                }}
              >
                {item.icon}
              </IconButton>
              {item.text}
            </Box>
            <ArrowForward />
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturedLinks;
