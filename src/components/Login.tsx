import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { teal } from "@mui/material/colors";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/logbooks");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Login failed", error.message);
      } else {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          border: "4px solid #008080", // teal blue
          width: "100%",
          backgroundColor: teal[50],
        }}
      >
        <Box textAlign="center" marginBottom={3}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ color: "#808080" }}
          >
            variant-net
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: teal[700], fontWeight: "bold" }}
          >
            Login to Student Logbooks
          </Typography>
        </Box>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />

          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />

          <Box marginTop={5} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: teal[700],
                "&:hover": {
                  backgroundColor: teal[800],
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>

        <Box textAlign="center" marginTop={5} marginBottom={1}>
          <Typography variant="body2" sx={{ color: "#808080" }}>
            Having trouble logging in? Contact Deniz.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
