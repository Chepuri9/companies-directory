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
import { useMemo, useState, useEffect } from "react";
import { SortType } from "../../components/enums/sortType";

export default function CompaniesPage() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const location = searchParams.get("location");
  const industry = searchParams.get("industry");
  const sort = searchParams.get("sort");
  console.log("mockCompanies", mockCompanies);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("searchQuery", searchQuery);
  console.log("locarion,industry,sort ", location, industry, sort);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : "Failed to load companies");
      setLoading(false);
    }
  }, [searchQuery, location, industry]);

  const filteredCompanies = useMemo(() => {
    let filtered = [...mockCompanies];
    console.log("befor Serach", filtered);

    if (searchQuery) {
      const lowerSearch = searchQuery.toLowerCase();
      filtered = filtered.filter((company) =>
        company.name.toLowerCase().includes(lowerSearch)
      );
    }
    console.log("After Serach", filtered);
    console.log("befor location", filtered);
    if (location && location.toLowerCase() !== "All".toLowerCase()) {
      filtered = filtered.filter(
        (company) => company.location.toLowerCase() === location.toLowerCase()
      );
    } else if (location && location.toLowerCase() === "All".toLowerCase()) {
      filtered = [...filtered];
    }

    console.log("After location", filtered);
    console.log("before industry", filtered);

    if (industry && industry.toLowerCase() !== "All".toLowerCase()) {
      filtered = filtered.filter(
        (company) => company.industry.toLowerCase() === industry.toLowerCase()
      );
    } else if (industry && industry.toLowerCase() === "All".toLowerCase()) {
      filtered = [...filtered];
    }

    console.log("after industry", filtered);

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
              {filteredCompanies.map((company: Company) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: "auto" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              CompanyHub
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © 2025 CompanyHub. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
