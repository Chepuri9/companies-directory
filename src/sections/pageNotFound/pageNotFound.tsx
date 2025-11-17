import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface NotFoundProps {
  title?: string;
  message?: string;
  imageSrc?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  hidebutton?: boolean;
}

const PageNotFound: React.FC<NotFoundProps> = ({
  title,
  message,
  buttonText,
  onButtonClick = () => {},
}) => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={2}
    >
      <Typography
        fontWeight={200}
        mb={4}
        sx={{
          fontSize: {
            xs: "24px", // small screens
            sm: "32px", // tablets
            md: "42px", // desktops
          },
          lineHeight: "110%",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        We couldn't find what you were looking for
      </Typography>

      <Typography variant="body1" mb={3}>
        {message}
      </Typography>

      {onButtonClick && buttonText && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#334F3E",
            borderRadius: 1,
            px: 4,
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2f3e30",
            },
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default PageNotFound;
