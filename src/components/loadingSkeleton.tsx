import { Grid, Card, CardContent, Skeleton, Box } from "@mui/material";

export function LoadingSkeleton() {
  return (
    <Grid container spacing={3}>
      {[...Array(6)].map((_, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card
            sx={{
              height: "100%",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.5 },
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              {/* Logo and Badge Skeleton */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Skeleton
                  variant="rectangular"
                  width={72}
                  height={72}
                  sx={{ borderRadius: 1.5 }}
                />
                <Skeleton variant="rounded" width={80} height={28} />
              </Box>

              {/* Title Skeleton */}
              <Skeleton variant="text" height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="75%" sx={{ mb: 2 }} />

              {/* Location Skeleton */}
              <Skeleton variant="text" width="60%" sx={{ mb: 3 }} />

              {/* Description Skeleton */}
              <Skeleton variant="text" height={80} sx={{ mb: 3 }} />

              {/* Footer Skeleton */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pt: 2,
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <Skeleton variant="text" width={50} />
                <Skeleton variant="text" width={50} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
