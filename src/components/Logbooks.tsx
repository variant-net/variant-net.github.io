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
  TextField,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import LogbookEntries from "./LogbookEntries";

import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";

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
  const [newEntryOpen, setNewEntryOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [seed, setSeed] = useState(Math.random());

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

  const handleNewEntryToggle = () => {
    setNewEntryOpen((prev) => !prev);
  };

  const reset = () => {
    setSeed(Math.random());
  };

  const addLogbookEntry = async (
    memberName: string,
    date: Timestamp,
    title: string,
    content: string
  ) => {
    try {
      await addDoc(collection(db, "logbooks", memberName, "logbook-entries"), {
        date,
        title,
        content,
      });
    } catch (error) {
      console.error("Error adding logbook entry: ", error);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F0F0F0",
        overflow: "auto",
      }}
    >
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
            onClick={async () => {
              await signOut(auth);
              navigate("/");
            }}
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

        {selectedMember.username === auth.currentUser?.email?.split("@")[0] &&
          newEntryOpen && (
            <>
              <Box
                sx={{
                  mt: 2,
                  mb: 7,
                  bgcolor: "#fff",
                  p: 3,
                  borderRadius: 2,
                  border: "2px solid #008080",
                  boxShadow: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // Add this line
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#008080", fontWeight: "bold" }}
                  >
                    New Logbook Entry
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<CloseIcon />}
                    onClick={handleNewEntryToggle}
                    sx={{
                      bgcolor: "#FF0000",
                      color: "#fff",
                      "&:hover": {
                        bgcolor: "#FF3333",
                      },
                      opacity: 0.9,
                    }}
                  >
                    Discard
                  </Button>
                </Box>
                <TextField
                  key="title"
                  variant="standard"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  placeholder="Enter the title here..."
                  sx={{
                    width: 300,
                  }}
                />
                <TextField
                  key="content"
                  variant="standard"
                  value={contentValue}
                  onChange={(e) => setContentValue(e.target.value)}
                  placeholder="Enter your entry here..."
                  fullWidth
                  multiline
                  sx={{
                    marginBottom: 2,
                  }}
                />
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Button
                      onClick={async () => {
                        handleNewEntryToggle();
                        await addLogbookEntry(
                          selectedMember.username,
                          Timestamp.now(),
                          titleValue,
                          contentValue
                        );
                        reset();
                        setTitleValue("");
                        setContentValue("");
                      }}
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: "#008080",
                        width: 180,
                        "&:hover": { bgcolor: "#006666" },
                      }}
                    >
                      Log Entry
                    </Button>
                  </Box>
                </>
              </Box>
            </>
          )}

        <LogbookEntries
          key={seed}
          memberName={selectedMember.username}
          reset={reset}
        />

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
        {selectedMember.username === auth.currentUser?.email?.split("@")[0] &&
          !newEntryOpen && (
            <Button
              variant="contained"
              onClick={handleNewEntryToggle}
              startIcon={<AddIcon />}
              size="large"
              sx={{
                position: "absolute",
                top: 40,
                right: 40,
                bgcolor: "#008080",
              }}
            >
              New Entry
            </Button>
          )}
      </Box>
    </Box>
  );
};

export default Logbooks;
