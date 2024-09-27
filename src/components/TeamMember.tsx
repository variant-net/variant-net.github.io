import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

interface TeamMemberProps {
  name: string;
  image: string;
  imagePosition?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  personalWebsiteUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  image,
  imagePosition,
  linkedInUrl,
  githubUrl,
  personalWebsiteUrl,
}) => {
  return (
    <Card
      sx={{
        width: 305,
        margin: "20px",
        textAlign: "center",
        border: "3px solid #008080", // Steel blue frame
        borderRadius: "15px", // Rounded corners
      }}
    >
      <CardMedia
        component="img"
        height="210"
        image={image}
        alt={`${name}'s picture`}
        sx={{
          objectFit: "cover",
          objectPosition: imagePosition || "top",
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 1,
          }}
        >
          {linkedInUrl && (
            <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" sx={{ color: "#0077B5" }} />
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" sx={{ color: "#333" }} />
            </Link>
          )}
          {personalWebsiteUrl && (
            <Link
              href={personalWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon fontSize="large" sx={{ color: "#4682B4" }} />
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
