import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase"; // Import Firestore instance
import { doc, updateDoc } from "firebase/firestore";
import {
  Box,
  Typography,
  CircularProgress,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import jsPDF from "jspdf"; // For PDF export

interface LogbookEntryProps {
  memberName: string;
}

interface Entry {
  id: string;
  date: Timestamp;
  title?: string;
  content: string;
}

const LogbookEntries: React.FC<LogbookEntryProps> = ({ memberName }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");

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
      console.log("Entry successfully updated!");
    } catch (error) {
      console.error("Error updating entry: ", error);
    }
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    let yOffset = 10; // Initial vertical offset
    const lineHeight = 8; // Reduced line height for smaller font size
    const fontSize = 10; // Smaller font size
    const pageWidth = 210; // A4 page width in jsPDF (mm)
    const marginRight = 10; // Right margin for the date

    // TODO: Add a title to the PDF, e.g., "Logbook Entries", add user's name and other related/required details.
    // TODO: Enhance the PDF layout and styling as needed, make it more presentable/readable.

    doc.setFontSize(fontSize); // Set the font size

    entries.forEach((entry, index) => {
      const title = `${index + 1}. ${entry.title || "No Title"}`;
      const content = entry.content || "No Content";
      const date = entry.date.toDate().toDateString() || "No Date"; // Convert Timestamp to string

      // Add title on the left
      doc.text(title, 10, yOffset);

      // Add date on the right (aligning near the page's right edge)
      doc.text(date, pageWidth - marginRight - doc.getTextWidth(date), yOffset);

      yOffset += lineHeight;

      // Add content with word wrapping (max width of 180)
      const splitContent = doc.splitTextToSize(content, 180);
      splitContent.forEach((line: string) => {
        // Add each line of wrapped content
        doc.text(line, 10, yOffset);
        yOffset += lineHeight;

        // Check if we need to add a new page
        if (yOffset > 280) {
          // Assuming A4 page height
          doc.addPage();
          yOffset = 10; // Reset yOffset for the new page
        }
      });

      yOffset += lineHeight; // Space between entries

      // Add new page if content overflows
      if (yOffset > 280) {
        doc.addPage();
        yOffset = 10;
      }
    });

    doc.save("logbook_entries.pdf");
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
                      onClick={() => handleSave(entry.id)}
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
                    )}
                  </Box>
                  <Typography variant="body1" sx={{ color: "#000" }}>
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

      {/* Export as PDF Button */}
      {memberName === auth.currentUser?.email?.split("@")[0] && (
        <Button
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
