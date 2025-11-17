import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      className="d-flex flex-row justify-content-center align-items-center"
      sx={{ minHeight: "60vh" }}
    >
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          py: { xs: 8, md: 16 },
          flex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Discover Leading Companies
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                mb: 4,
                opacity: 0.9,
                fontWeight: 400,
                color: "primary.main",
              }}
            >
              Explore thousands of innovative companies worldwide. Find industry
              leaders, emerging startups, and everything in between.
            </Typography>
            <Link to="/companies" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Browse Directory
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
