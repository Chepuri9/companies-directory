import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Rating,
  useTheme,
} from "@mui/material";
import { LocationOn, People } from "@mui/icons-material";
import type { Company } from "./models/company";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        border: `1.5px solid ${theme.palette.divider}`,
        borderRadius: 3,
        height: "100%",
        boxShadow: "none",
        transition: "border-color 0.15s cubic-bezier(0.4,0,0.2,1)",
        bgColor: theme.palette.background.paper,
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          borderColor: theme.palette.primary.main,
          background: `linear-gradient(90deg, ${theme.palette.action.hover} 0%, ${theme.palette.background.paper} 100%)`,
        },
      }}
    >
      {/* Top Section: Logo & Industry */}
      <Box
        sx={{
          p: 2,
          pb: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: 64,
            height: 64,
            bgcolor: theme.palette.grey[100],
            borderRadius: 2,
            boxShadow: "none",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            overflow: "hidden",
            border: `1px solid ${theme.palette.grey[300]}`,
            mr: 2,
          }}
        >
          <Box
            component="img"
            src={company.logo || "/placeholder.svg"}
            alt={company.name}
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>

        {/* Industry */}
        <Chip
          label={company.industry}
          size="small"
          sx={{
            fontWeight: 700,
            fontSize: "0.81rem",
            color: theme.palette.primary.main,
            bgcolor: theme.palette.action.hover,
            letterSpacing: "0.4px",
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent sx={{ px: 2, pt: 1, pb: 2 }}>
        {/* Company Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: theme.palette.text.primary,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            fontSize: "1.07rem",
            whiteSpace: "normal",
          }}
        >
          {company.name}
        </Typography>

        {/* Location */}
        <Stack direction="row" spacing={0.7} alignItems="center" sx={{ mb: 1 }}>
          <LocationOn
            fontSize="small"
            sx={{ color: theme.palette.info.dark }}
          />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
          >
            {company.location}
          </Typography>
        </Stack>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: 1.5,
            fontSize: "0.97rem",
          }}
        >
          {company.description}
        </Typography>

        {/* Footer: Rating & Employee Count */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={1}
        >
          <Stack direction="row" spacing={0.4} alignItems="center">
            <Rating
              value={company.rating}
              readOnly
              size="small"
              precision={0.1}
            />
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ ml: 0.5, color: theme.palette.text.primary }}
            >
              {company.rating}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <People
              fontSize="small"
              sx={{ color: theme.palette.action.active }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              {company.employees > 999
                ? `${Math.round(company.employees / 1000)}K`
                : company.employees}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
