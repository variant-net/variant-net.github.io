import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  Divider,
  Button,
  Popover,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoIcon from "@mui/icons-material/Info";

import TeamMember from "./TeamMember";
import { teamMembers } from "../data/team-members"; // Assuming you have an array of students

const Logbooks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const member = queryParams.get("member");

  const [selectedMember, setSelectedMember] = useState(
    teamMembers.find((m) => m.name === member) || teamMembers[0]
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMemberClick = (member: (typeof teamMembers)[0]) => {
    setSelectedMember(member);
    window.history.pushState({}, "", `/#/logbooks?member=${member.name}`);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#F0F0F0" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 280,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 280, boxSizing: "border-box" },
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h4"
            onClick={() => {
              navigate("/");
            }}
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              pt: 3,
              bgcolor: "#008080",
            }}
          >
            variant-net
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            pb: 3,
            bgcolor: "#008080",
          }}
        >
          Student Logbooks
        </Typography>
        <Divider />
        <List>
          {teamMembers.map((member, index) => (
            <ListItemButton
              key={index}
              selected={selectedMember.name === member.name}
              onClick={() => handleMemberClick(member)}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#E0E0E0", // Sky Blue for selected item
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#008080", // Lime Green hover for selected
                  },
                },
                "&:hover": {
                  bgcolor: "#008080", // Lime Green hover
                  color: "white",
                },
              }}
            >
              <ListItemText
                primary={member.name}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: "medium",
                }}
              />
              {selectedMember.name === member.name && (
                <ArrowForwardIosIcon
                  sx={{
                    color: "#008080",
                    fontSize: 20,
                  }}
                />
              )}
            </ListItemButton>
          ))}
        </List>
        {/* Add a back to home button */}
        <Box
          sx={{
            position: "absolute",
            bottom: 22,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            startIcon={<HomeIcon />}
            sx={{
              bgcolor: "#008080",
              color: "#fff",
              "&:hover": {
                bgcolor: "#006666",
              },
            }}
          >
            Return to Home Page
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          bgcolor: "#F0F0F0", // Soft Gray for the main content background
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "#008080", mb: 3 }}>
          <strong>{selectedMember.name}'s Logbook</strong>
          <IconButton
            onClick={(event) => handlePopoverOpen(event)}
            size="large"
            sx={{ color: "#008080", ml: 1 }}
          >
            <InfoIcon />
          </IconButton>
        </Typography>
        {/* Render the student's logbook content */}
        <Typography
          variant="body1"
          sx={{
            bgcolor: "#FFFFFF", // White background for content
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
            color: "#000",
          }}
        >
          The logbooks will be uploaded here as they become available.
        </Typography>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <TeamMember
            name={selectedMember.name}
            role={selectedMember.role}
            image={selectedMember.image}
            imagePosition={selectedMember.imagePosition}
            linkedInUrl={selectedMember.linkedInUrl}
            githubUrl={selectedMember.githubUrl}
            personalWebsiteUrl={selectedMember.personalWebsiteUrl}
            sx={{
              width: 305,
              textAlign: "center",
              border: "3px solid white", // Steel blue frame
            }}
          />
        </Popover>
      </Box>
    </Box>
  );
};

export default Logbooks;
