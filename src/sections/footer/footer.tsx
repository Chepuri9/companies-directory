import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Container,
  useTheme,
} from "@mui/material";
import { Facebook, Phone, Twitter, Instagram } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import "./footer.css";
import footerData from "./footerData.json";

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "facebook":
      return Facebook;
    case "twitter":
      return Twitter;
    case "instagram":
      return Instagram;
    // fallback icon if no match
    default:
      return Phone;
  }
};

const Footer: React.FC = () => {
  const [footers] = useState(footerData.footers);
  const socialMediaState = { data: footerData.socialMedia };

  const location = useLocation();
  const currectPath = location.pathname;
  const theme = useTheme();

  return (
    <Container
      sx={{
        minWidth: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.light,
      }}
    >
      <Grid container sx={{ width: "100%" }} spacing={3}>
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "start", sm: "start", md: "start" },
              alignItems: { xs: "start", sm: "start", md: "start" },
            }}
          >
            <Typography
              variant="body2"
              sx={{ mt: 1, padding: { xs: "8px 8px 8px 0px", md: "8px" } }}
            >
              For every day,
              <br className="d-none d-sm-block" /> for every mood, for every you
            </Typography>
          </Box>
        </Grid>

        {/* Footer Sections */}
        {footers?.map((footer) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={footer.id}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "center" },
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: { sm: "200px" } }}>
              {/* Section Header */}
              <Box
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "flex-start", sm: "flex-start" },
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "400" }}>
                  {footer.title}
                </Typography>
              </Box>

              {/* Section Content */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", sm: "flex-start" },
                  width: "100%",
                }}
              >
                {footer?.footerDetails?.length > 4 ? (
                  <Box sx={{ width: "100%", maxWidth: "200px" }}>
                    <Grid container spacing={1}>
                      {footer?.footerDetails
                        ?.sort((a, b) => a?.sequence - b?.sequence)
                        .map((detail) => (
                          <Grid item xs={6} key={detail.id}>
                            <MuiLink
                              component={NavLink}
                              to={detail.url}
                              onClick={() => {
                                if (detail.url === currectPath) {
                                  window.scrollTo(0, 0);
                                }
                              }}
                              color="inherit"
                              underline="none"
                              display="block"
                              sx={{
                                fontSize: "14px",
                                lineHeight: "20px",
                                textTransform: "none",
                                letterSpacing: "0%",
                                my: 0.5,
                                "&:hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              {detail.title}
                            </MuiLink>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "flex-start", sm: "flex-start" },
                    }}
                  >
                    {footer.footerDetails
                      ?.sort((a, b) => a.sequence - b.sequence)
                      .map((detail) => (
                        <MuiLink
                          key={detail.id}
                          component={NavLink}
                          to={detail.url}
                          onClick={() => {
                            if (detail.url === currectPath) {
                              window.scrollTo(0, 0);
                            }
                          }}
                          color="inherit"
                          underline="none"
                          display="block"
                          sx={{
                            fontSize: "14px",
                            lineHeight: "20px",
                            textTransform: "none",
                            letterSpacing: "0%",
                            my: 1,
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {detail.title}
                        </MuiLink>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Mobile Social Media Icons */}
      <Box sx={{ mt: 2, display: { xs: "flex", sm: "none" }, gap: 1 }}>
        {socialMediaState.data.map((media) => {
          const Icon = getPlatformIcon(media.platform);
          return (
            Icon && (
              <IconButton
                key={media.id}
                sx={{ color: "white" }}
                component="a"
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </IconButton>
            )
          );
        })}
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          borderTop: "1px solid white",
          mt: 3,
          py: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            className="text-center pb-2 w-100 w-md-50 text-md-start"
            variant="body2"
            sx={{
              color: "white",
              pl: { xs: 0, md: 1 },
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            © 2025 Durga All Rights Reserved{" "}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 2 }}>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {socialMediaState.data.map((media) => {
              const Icon = getPlatformIcon(media.platform);
              return (
                Icon && (
                  <IconButton
                    key={media.id}
                    sx={{ color: "white" }}
                    component="a"
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </IconButton>
                )
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
