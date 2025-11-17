import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Grid,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import type { FilterOptions } from "./models/filterOptions";
import { industries, locations } from "../constants/mock-data";

interface FilterSectionProps {
  onFilter: (filters: FilterOptions) => void;
  isLoading: boolean;
}

export function FilterSection({ onFilter, isLoading }: FilterSectionProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    industry: "All Industries",
    location: "All Locations",
  });

  const handleFilterChange = useCallback(
    (newFilters: Partial<FilterOptions>) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      onFilter(updatedFilters);
    },
    [filters, onFilter]
  );

  return (
    <Card sx={{ mb: 4 }}>
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
              fullWidth
              placeholder="Search company name..."
              value={filters.searchTerm}
              onChange={(e) =>
                handleFilterChange({ searchTerm: e.target.value })
              }
              disabled={isLoading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
            />
          </Grid>

          {/* Industry Filter */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              value={filters.industry}
              onChange={(e) => handleFilterChange({ industry: e.target.value })}
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
              onChange={(e) => handleFilterChange({ location: e.target.value })}
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
