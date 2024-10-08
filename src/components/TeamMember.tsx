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
  role: string;
  image: string;
  imagePosition?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  personalWebsiteUrl?: string;
  sx?: object;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  image,
  imagePosition,
  linkedInUrl,
  githubUrl,
  personalWebsiteUrl,
  sx,
}) => {
  return (
    <Card
      /*
      //This functionality has been removed because it causes a conflict with the GitHub and LinkedIn icons/links.
      onClick={() => {
        if (role === "student") {
          navigate(`/logbooks?member=${name}`);
        }
      }}
      */
      sx={sx}
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
              <LinkedInIcon
                fontSize="large"
                sx={{ color: "rgb(240, 199, 171)" }}
              />
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                fontSize="large"
                sx={{ color: "rgb(240, 199, 171)" }}
              />
            </Link>
          )}
          {personalWebsiteUrl && (
            <Link
              href={personalWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon
                fontSize="large"
                sx={{ color: "rgb(240, 199, 171)" }}
              />
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
