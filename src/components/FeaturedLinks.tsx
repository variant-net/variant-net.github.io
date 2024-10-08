import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CollectionsIcon from '@mui/icons-material/Collections';

import { teamMembers } from "../data/team-members";

const links = [
  {
    text: "GitHub Repository",
    link: "https://github.com/variant-net",
    icon: <GitHubIcon />,
  },
  {
    text: "Student Logbooks",
    link: `/#/logbooks?member=${teamMembers[0].name}`,
    icon: <LibraryBooksIcon />,
  },
  {
    text: "Gallery",
    link: "/#/gallery",
    icon: <CollectionsIcon />,
  }
];

const FeaturedLinks = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        paddingX: "20%",
        paddingBottom: "22%",
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
              backgroundColor: "white",
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
                  backgroundColor: "white",
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
