import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Grid,
  useTheme,
} from "@mui/material";
import type { FilterOptions } from "./models/filterOptions";
import { industries, locations } from "../constants/mock-data";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { SortType } from "./enums/sortType";

interface FilterSectionProps {
  isLoading: boolean;
}

export function FilterSection({ isLoading }: FilterSectionProps) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { industry, location, sort } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: searchQuery || "",
    industry: industry || "All",
    location: location || "All",
    sort: sort || SortType.RELEVANCE,
  });

  useEffect(() => {
    navigate(
      `/companies?q=${filters.searchTerm}&industry=${filters.industry}&location=${filters.location}&sort=${filters.sort}`,
      { replace: true }
    );
  }, [filters, navigate]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card
      sx={{
        mb: 4,
        boxShadow: "none",
        border: `1px solid ${theme.palette.primary.main} `,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "primary.main",
            fontSize: "1.1rem",
          }}
        >
          Filter Companies
        </Typography>

        <Grid container spacing={2}>
          {/* Search Input */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              value={filters.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
              disabled={isLoading}
              label="Sort by Company Rating"
              variant="outlined"
              size="small"
            >
              {Object.keys(SortType).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Industry Filter */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              value={filters.industry}
              onChange={(e) => handleFilterChange("industry", e.target.value)}
              disabled={isLoading}
              label="Industry"
              variant="outlined"
              size="small"
            >
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Location Filter */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              disabled={isLoading}
              label="Location"
              variant="outlined"
              size="small"
            >
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
