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
import { useCompanies } from "../../hooks/hook";

export default function CompaniesPage() {
  const { filteredCompanies, loading, error } = useCompanies();
  const theme = useTheme();

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
          <Typography color="text.secondary">
            Find and explore {filteredCompanies.length} companies
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: 6, flex: 1 }}>
        <Container maxWidth="lg">
          {/* Filter Section */}
          <Box sx={{ mb: 4 }}>
            <FilterSection
              onFilter={() => console.log("filter applied")}
              isLoading={loading}
            />
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
            /* Empty State */
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
                No companies found matching your criteria.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your filters to see more results.
              </Typography>
            </Box>
          ) : (
            /* Companies Grid */
            <Grid container spacing={3}>
              {filteredCompanies.map((company: Company) => (
                <Grid item xs={12} sm={6} md={4} key={company.id}>
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
