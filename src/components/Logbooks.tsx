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
} from "@mui/material";
import { teamMembers } from "../data/team-members"; // Assuming you have an array of students

const Logbooks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const member = queryParams.get("member");

  const [selectedMember, setSelectedMember] = useState(
    teamMembers.find((m) => m.name === member) || teamMembers[0]
  );

  const handleMemberClick = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    // Optionally, update the URL when a member is selected
    window.history.pushState({}, "", `/#/logbooks?member=${member.name}`);
  };

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
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#F0F0F0", // Soft Gray for the main content background
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "#008080", mb: 3 }}>
          <strong>{selectedMember.name}'s Logbooks</strong>
        </Typography>
        {/* Render the student's logbook content */}
        <Typography
          variant="body1"
          sx={{
            bgcolor: "#FFFFFF", // White background for content
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            color: "#000",
          }}
        >
          The logbooks will be uploaded here as they become available.
        </Typography>
      </Box>
    </Box>
  );
};

export default Logbooks;
