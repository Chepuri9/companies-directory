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
import { Link } from "react-router-dom";
interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const theme = useTheme();

  return (
    <Link to={`/companies/${company.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.success.main})`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            boxShadow: "0 16px 32px rgba(0, 0, 0, 0.12)",
            "&::before": {
              opacity: 1,
            },
          },
        }}
      >
        {/* Header with logo and badge */}
        <Box sx={{ p: 3, pb: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: 72,
                height: 72,
                bgcolor: "#f1f5f9",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
              }}
            >
              <Box
                component="img"
                src={
                  company.logo ||
                  "/placeholder.svg?height=72&width=72&query=company logo"
                }
                alt={company.name}
                width={72}
                height={72}
                style={{ objectFit: "cover" }}
              />
            </Box>
            {/* Industry Badge */}
            <Chip
              label={company.industry}
              size="small"
              sx={{
                bgcolor: "#dbeafe",
                color: theme.palette.secondary.main,
                fontWeight: 700,
                fontSize: "0.75rem",
              }}
            />
          </Box>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {/* Company Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              color: "primary.main",
              fontSize: "1.05rem",
            }}
          >
            {company.name}
          </Typography>

          {/* Location */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ mb: 2, alignItems: "center" }}
          >
            <LocationOn sx={{ fontSize: 18, color: "secondary.main" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {company.location}
            </Typography>
          </Stack>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: 1.5,
            }}
          >
            {company.description}
          </Typography>

          {/* Footer Stats */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 2,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Stack direction="row" spacing={0.3} sx={{ alignItems: "center" }}>
              <Rating
                value={company.rating}
                readOnly
                size="small"
                precision={0.1}
              />
              <Typography variant="body2" fontWeight={700} sx={{ ml: 0.5 }}>
                {company.rating}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <People sx={{ fontSize: 18, color: "text.secondary" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
              >
                {(company.employees / 1000).toFixed(0)}K
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
