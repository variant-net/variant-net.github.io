import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase"; // Import Firestore instance
import {
  Box,
  Typography,
  CircularProgress,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import jsPDF from "jspdf"; // For PDF export

import "../assets/fonts/ProximaNova-Bold-normal.js";
import "../assets/fonts/ProximaNova-BoldIt-normal.js";
import "../assets/fonts/ProximaNova-Regular-normal.js";
import "../assets/fonts/ProximaNova-RegularIt-normal.js";

import bilkentLogo from "../assets/bg/ING-amblem-yazi.png"; // Bilkent logo
import { teamMembers } from "../data/team-members";

interface LogbookEntryProps {
  memberName: string;
  reset: () => void;
}

interface Entry {
  id: string;
  date: Timestamp;
  title?: string;
  content: string;
}

const LogbookEntries: React.FC<LogbookEntryProps> = ({ memberName, reset }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "logbooks", memberName, "logbook-entries"),
            orderBy("date", "desc")
          )
        );
        const fetchedEntries: Entry[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Entry[];
        setEntries(fetchedEntries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching logbook entries:", error);
        setLoading(false);
      }
    };

    fetchEntries();
  }, [memberName]);

  const handleEdit = (entry: Entry) => {
    setEditingEntryId(entry.id);
    setEditedTitle(entry.title || "");
    setEditedContent(entry.content);
  };

  const handleDelete = async (id: string) => {
    try {
      // Create a reference to the document you want to delete
      const entryRef = doc(db, "logbooks", memberName, "logbook-entries", id);

      // Delete the document
      await deleteDoc(entryRef);
    } catch (error) {
      console.error("Error deleting entry: ", error);
    }
  };

  const handleSave = async (id: string) => {
    try {
      // Create a reference to the document you want to update
      const entryRef = doc(db, "logbooks", memberName, "logbook-entries", id);

      // Update the document with the edited title and content
      await updateDoc(entryRef, {
        title: editedTitle,
        content: editedContent,
        date: Timestamp.now(),
      });

      // Exit edit mode after saving
      setEditingEntryId(null);
    } catch (error) {
      console.error("Error updating entry: ", error);
    }
  };

  const handleExportPDF = () => {
    const generateCoverPage = (
      bilkentLogo: string,
      studentName: string,
      studentID: string,
      supervisorName: string = "A. Ercüment Çiçek"
    ) => {
      const doc = new jsPDF();

      doc.addImage(bilkentLogo, "PNG", 15, 20, 160, 34);

      doc.setFont("ProximaNova-Regular", "normal");
      doc.setFontSize(12);
      doc.text("Department of Computer Engineering", 15, 70);
      doc.text("Fall 2024 - Spring 2025", 15, 80);

      // Project title
      doc.setFont("ProximaNova-Bold", "normal");
      doc.setFontSize(28);
      doc.text("CS 491/492", 15, 115);
      doc.text("Senior Design Project I/II", 15, 125);

      doc.setFontSize(20);
      doc.text("Student Logbook", 15, 155);

      doc.setFontSize(17);
      doc.setFont("ProximaNova-Regular", "normal");
      doc.text(`${studentName}`, 15, 175);
      doc.text(`Bilkent ID: ${studentID}`, 15, 185);

      // Supervisor name
      doc.setFontSize(15);

      doc.setFont("ProximaNova-Bold", "normal");
      doc.text("Project Name:", 15, 220);
      doc.setFont("ProximaNova-Regular", "normal");
      doc.text(" variant-net", doc.getTextWidth("Project Name:") + 17, 220);

      doc.setFont("ProximaNova-Bold", "normal");
      doc.text(`Supervisor:`, 15, 230);
      doc.setFont("ProximaNova-Regular", "normal");
      doc.text(` ${supervisorName}`, doc.getTextWidth("Supervisor:") + 17, 230);

      // Footer with current date
      const currentDate = new Date().toLocaleDateString();

      doc.setFontSize(10);
      doc.text(currentDate, 15, 270);
      doc.text(
        `This document is submitted to the Department of Computer Engineering of Bilkent University in partial fulfillment of`,
        15,
        277
      );
      doc.text(
        `the CS 491/492, Senior Design Project I/II, requirement.`,
        15,
        284
      );

      return doc;
    };

    const student = teamMembers.find(
      (member) => member.username === memberName
    );

    const doc = generateCoverPage(bilkentLogo, student!.name, student!.id);

    const lineHeight = 8; // Reduced line height for smaller font size
    const pageWidth = 210; // A4 page width in jsPDF (mm)
    const marginRight = 10; // Right margin for the date
    const contentWidth = 180; // Width for the content section

    // Add a new page for the logbook entries
    doc.addPage();

    let yOffset = 20; // Reset yOffset for the logbook entries

    // Content section
    entries.forEach((entry) => {
      const title = entry.title || "No Title";
      const content = entry.content || "No Content";
      const date = entry.date.toDate().toDateString() || "No Date"; // Convert Timestamp to string

      // Add title
      doc.setFontSize(12); // Title font size
      doc.setTextColor(59, 59, 59); // Black color for title
      doc.setFont("ProximaNova-Bold", "normal");
      doc.text(title, 10, yOffset);

      // Add date (smaller and gray)
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150); // Gray color for date
      doc.setFont("ProximaNova-RegularIt", "normal");
      doc.text(date, pageWidth - marginRight - doc.getTextWidth(date), yOffset);

      yOffset += lineHeight;

      // Add content with manual justification
      const splitContent = doc.splitTextToSize(content, contentWidth);
      doc.setFontSize(10); // Content font size
      doc.setTextColor(79, 79, 79); // Dark gray for content
      doc.setFont("ProximaNova-Regular", "normal");

      splitContent.forEach((line: string) => {
        doc.text(line, 10, yOffset);
        yOffset += lineHeight;

        // Check if we need to add a new page
        if (yOffset > 280) {
          doc.addPage();
          yOffset = 20; // Reset yOffset for the new page
        }
      });

      yOffset += lineHeight; // Space between entries

      // Add new page if content overflows
      if (yOffset > 280) {
        doc.addPage();
        yOffset = 20;
      }
    });

    doc.save(`CS491-2_${student!.id}_Logbook.pdf`);
  };

  const openDeleteConfirmation = (id: string) => {
    setEntryToDelete(id);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setEntryToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <Box
              key={entry.id}
              sx={{
                mb: 2,
                p: 2,
                bgcolor: "#FFFFFF",
                borderRadius: 2,
                boxShadow: 1,
                position: "relative",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "gray",
                }}
              >
                {entry.date.toDate().toDateString()}
              </Typography>

              {editingEntryId === entry.id ? (
                <>
                  <TextField
                    variant="standard"
                    label="Title"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    sx={{
                      width: 300,
                      mb: 3,
                    }}
                  />
                  <TextField
                    variant="standard"
                    label="Content"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    fullWidth
                    multiline
                    sx={{ mb: 6 }}
                  />
                  <>
                    <Button
                      onClick={async () => {
                        await handleSave(entry.id);
                        reset();
                      }}
                      sx={{
                        position: "absolute",
                        right: 10,
                        bottom: 10,
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => setEditingEntryId(null)}
                      sx={{
                        position: "absolute",
                        right: 80,
                        bottom: 10,
                        color: "red",
                      }}
                    >
                      Discard
                    </Button>
                  </>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#008080" }}>
                      {entry.title}
                    </Typography>
                    {memberName === auth.currentUser?.email?.split("@")[0] && (
                      <>
                        <Button
                          startIcon={<DeleteForeverIcon />}
                          onClick={() => openDeleteConfirmation(entry.id)}
                          sx={{
                            position: "absolute",
                            right: 100,
                            bottom: 10,
                            color: "red",
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          startIcon={<EditIcon />}
                          onClick={() => handleEdit(entry)}
                          sx={{
                            position: "absolute",
                            right: 10,
                            bottom: 10,
                          }}
                        >
                          Edit
                        </Button>
                      </>
                    )}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", marginBottom: 5 }}
                  >
                    {entry.content}
                  </Typography>
                </>
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: "#000" }}>
            No entries available yet.
          </Typography>
        )}
      </Box>
      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={closeDeleteConfirmation}>
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <WarningAmberIcon sx={{ color: "orange", mr: 1 }} />
            <Typography variant="h6" sx={{ color: "orange", mt: 0.5 }}>
              Delete Entry
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this entry? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirmation} color="primary">
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await handleDelete(entryToDelete!);
              reset();
            }}
            color="error"
            sx={{
              mr: 1.5
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* Export as PDF Button */}
      {memberName === auth.currentUser?.email?.split("@")[0] && (
        <Button
          disabled={entries.length === 0}
          startIcon={<PictureAsPdfIcon />}
          onClick={handleExportPDF}
          variant="contained"
          sx={{
            position: "fixed",
            right: 20,
            bottom: 20,
            bgcolor: "rgb(234, 51, 35)",
          }}
        >
          Export as PDF
        </Button>
      )}
    </>
  );
};

export default LogbookEntries;
