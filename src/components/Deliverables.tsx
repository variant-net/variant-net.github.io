import { Typography as TypographyMaterial } from "@mui/material";
import { Typography as TypographyJoy } from "@mui/joy";
import Table from "@mui/joy/Table";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";
import GetAppIcon from "@mui/icons-material/GetApp"; // Download icon
import { files } from "../data/files";

const Deliverables = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        paddingX: "20rem",
        paddingBottom: "20rem",
        backgroundColor: "#F0F0F0",
        borderBottom: "2px solid #E0E0E0",
      }}
    >
      <TypographyMaterial
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ color: "#008080", fontWeight: "bold", textAlign: "center" }} // teal blue
      >
        The Deliverables
      </TypographyMaterial>
      <TypographyMaterial
        variant="body1"
        sx={{
          color: "#333",
          fontSize: 20,
          textAlign: "center",
          paddingBottom: 4,
          fontStyle: "italic",
        }}
      >
        <strong>
          The deliverables for the project will be uploaded here as they become
          available.
        </strong>
      </TypographyMaterial>
      <Table
        hoverRow
        size="sm"
        borderAxis="none"
        variant="soft"
        sx={{
          "--TableCell-paddingX": "1rem",
          "--TableCell-paddingY": "1rem",
          border: "2px solid #E0E0E0",
        }}
      >
        <thead>
          <tr>
            <th>
              <TypographyJoy level="title-sm">File</TypographyJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyJoy level="title-sm">Added at</TypographyJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyJoy level="title-sm">Size</TypographyJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyJoy level="title-sm">Download</TypographyJoy>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>
                <TypographyJoy
                  level="title-sm"
                  sx={{ alignItems: "end", display: "flex" }}
                >
                  {file.name}
                </TypographyJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                <TypographyJoy level="body-sm">{file.added}</TypographyJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                <TypographyJoy level="body-sm">{file.size}</TypographyJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                {file.link && (
                  <IconButton
                    variant="plain"
                    color="neutral"
                    component="a"
                    href={file.link}
                    download
                  >
                    <GetAppIcon fontSize="small" />
                  </IconButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default Deliverables;
