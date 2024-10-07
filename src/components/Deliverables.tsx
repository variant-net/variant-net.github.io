import { Typography as TypographyOfMaterial } from "@mui/material";
import { Typography as TypographyOfJoy } from "@mui/joy";
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
        paddingX: "20%",
        paddingBottom: "20%",
        backgroundColor: "#F0F0F0",
        borderBottom: "2px solid #E0E0E0",
      }}
    >
      <TypographyOfMaterial
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ color: "#008080", fontWeight: "bold", textAlign: "center" }} // teal blue
      >
        The Deliverables
      </TypographyOfMaterial>
      <TypographyOfMaterial
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
      </TypographyOfMaterial>
      <Table
        hoverRow
        size="sm"
        borderAxis="none"
        variant="soft"
        sx={{
          "--TableCell-paddingX": "1%",
          "--TableCell-paddingY": "1%",
          border: "2px solid #E0E0E0",
        }}
      >
        <thead>
          <tr>
            <th>
              <TypographyOfJoy level="title-sm">File</TypographyOfJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyOfJoy level="title-sm">Added at</TypographyOfJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyOfJoy level="title-sm">Size</TypographyOfJoy>
            </th>
            <th style={{ textAlign: "right" }}>
              <TypographyOfJoy level="title-sm">Download</TypographyOfJoy>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>
                <TypographyOfJoy
                  level="title-sm"
                  sx={{ alignItems: "end", display: "flex" }}
                >
                  {file.name}
                </TypographyOfJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                <TypographyOfJoy level="body-sm">{file.added}</TypographyOfJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                <TypographyOfJoy level="body-sm">{file.size}</TypographyOfJoy>
              </td>
              <td style={{ textAlign: "right" }}>
                {file.link && (
                  <IconButton
                    variant="plain"
                    color="neutral"
                    component="a"
                    href={file.link}
                    download={file.link}
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
