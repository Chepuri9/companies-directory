import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Alert,
  useTheme,
} from "@mui/material";
import { ErrorOutline as ErrorIcon } from "@mui/icons-material";
import { FilterSection } from "../../components/filterSection";
import { LoadingSkeleton } from "../../components/loadingSkeleton";
import { CompanyCard } from "../../components/companyCard";
import type { Company } from "../../components/models/company";
import { useSearchParams } from "react-router-dom";
import { mockCompanies } from "../../constants/mock-data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { SortType } from "../../components/enums/sortType";

export default function CompaniesPage() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const location = searchParams.get("location");
  const industry = searchParams.get("industry");
  const sort = searchParams.get("sort");

  const pageSize = 8; // must be before hooks usage

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Filter data based on searchQuery/location/industry & sorting
  const filteredCompanies = useMemo(() => {
    let filtered = [...mockCompanies];

    if (searchQuery) {
      const lowerSearch = searchQuery.toLowerCase();
      filtered = filtered.filter((company) =>
        company.name.toLowerCase().includes(lowerSearch)
      );
    }

    if (location && location.toLowerCase() !== "all") {
      filtered = filtered.filter(
        (company) => company.location.toLowerCase() === location.toLowerCase()
      );
    }

    if (industry && industry.toLowerCase() !== "all") {
      filtered = filtered.filter(
        (company) => company.industry.toLowerCase() === industry.toLowerCase()
      );
    }

    filtered.sort((a, b) => {
      switch (sort) {
        case SortType.ASC:
          return a.rating - b.rating;
        case SortType.DESC:
          return b.rating - a.rating;
        case SortType.RELEVANCE:
          return 0;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, location, industry, sort]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCompanies.length / pageSize);

  // Slice filtered data for the current page
  const currentPageData = useMemo(() => {
    const offset = (page - 1) * pageSize;
    return filteredCompanies.slice(offset, offset + pageSize);
  }, [filteredCompanies, page, pageSize]);

  // Reset page to 1 when filters or sort change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, location, industry, sort]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, location, industry, sort, page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    window.scrollTo(0, 0);
    setPage(value);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mb: 2,
        bgcolor: "background.default",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, #f3f4f6 100%)`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 1, color: "primary.main" }}
          >
            Companies Directory
          </Typography>
          <Typography color="text.primary">
            Find and explore {filteredCompanies.length} companies
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: 6, flex: 1 }}>
        <Container maxWidth="lg">
          {/* Filter Section */}
          <Box sx={{ mb: 4 }}>
            <FilterSection isLoading={loading} />
          </Box>

          {/* Error State */}
          {error && (
            <Alert severity="error" icon={<ErrorIcon />} sx={{ mb: 4 }}>
              {error}
            </Alert>
          )}

          {/* Loading State */}
          {loading ? (
            <LoadingSkeleton />
          ) : filteredCompanies.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
                No companies found matching your criteria.
              </Typography>
              <Typography variant="body2" color="text.primary">
                Try adjusting your filters to see more results.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {currentPageData.map((company: Company) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Pagination */}
      <Box sx={{ width: "100%", mb: 5 }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={2}
        >
          <Pagination
            count={totalPages}
            page={page}
            color="primary"
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
    </Box>
  );
}
