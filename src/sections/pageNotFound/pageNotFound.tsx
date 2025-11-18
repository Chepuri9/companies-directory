import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  hidebutton?: boolean;
}

const PageNotFound: React.FC<NotFoundProps> = ({
  title = "Page Not Found",
  message = "The page you are looking for might have been removed or is temporarily unavailable.",
  buttonText = "Go Back Home",
  onButtonClick,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={2}
      sx={{
        background: `
          radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%),
          radial-gradient(circle, #ffffff 0%, transparent 50%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      <Typography
        fontWeight={700}
        mb={4}
        sx={{
          fontSize: {
            xs: "28px",
            sm: "36px",
            md: "48px",
          },
          lineHeight: "110%",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{ color: "text.primary" }}
        variant="h6"
        fontWeight={600}
        gutterBottom
      >
        We couldn't find what you were looking for
      </Typography>

      <Typography variant="body1" mb={4} maxWidth={600}>
        {message}
      </Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          backgroundColor: "#ffffff88",
          color: theme.palette.primary.main,
          borderRadius: 2,
          px: 5,
          py: 1.5,
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#ffffffaa",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default PageNotFound;
