import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Card, Link, Container, Typography, Box } from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
// components
import Page from "../components/Page";
import Logo from "../components/Logo";
// sections
import { RegisterForm } from "../sections/auth/register";
import AuthSocial from "../sections/auth/AuthSocial";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const theme = useTheme();

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle></HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Box sx={{ width: 400, height: 400, display: "flex" }}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 154.000000 173.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,173.000000) scale(0.100000,-0.100000)"
                  fill={theme.palette.primary.main}
                  stroke="none"
                >
                  <path
                    d="M428 1621 c-181 -190 -260 -338 -295 -554 -30 -191 12 -335 132 -452
                73 -72 152 -119 300 -181 190 -80 137 -70 -90 16 -189 72 -320 200 -361 354
                -18 68 -18 242 1 336 29 147 111 386 174 505 2 6 -3 4 -12 -3 -27 -23 -118
                -171 -162 -266 -81 -175 -105 -275 -105 -437 1 -284 136 -456 435 -554 44 -14
                152 -44 240 -65 360 -88 413 -119 470 -285 7 -18 9 -16 22 15 50 117 14 222
                -108 314 -32 25 -116 77 -187 117 -70 39 -166 98 -214 131 -161 110 -296 282
                -333 423 -20 77 -19 201 1 284 16 67 82 214 148 329 20 34 34 62 32 62 -2 0
                -42 -40 -88 -89z"
                  />
                  <path
                    d="M1164 1557 c-11 -17 -28 -44 -37 -59 -9 -15 -36 -39 -60 -53 -41 -24
                -47 -24 -102 -13 -45 9 -72 9 -119 -1 -89 -19 -105 -34 -28 -27 34 3 62 2 62
                -2 0 -15 -75 -44 -128 -49 -37 -4 -50 -9 -43 -16 18 -18 13 -24 -47 -46 -32
                -11 -69 -33 -83 -47 l-24 -26 42 21 c49 24 133 39 133 23 0 -5 -10 -12 -23
                -16 -19 -4 -137 -96 -124 -96 2 0 21 7 42 16 59 24 59 12 0 -33 -68 -53 -86
                -81 -91 -141 -4 -38 -2 -43 6 -27 12 22 49 49 56 42 3 -2 -5 -21 -17 -42 -28
                -46 -29 -108 -3 -155 l18 -35 7 58 c3 32 9 60 12 64 3 3 11 -16 18 -41 16 -65
                75 -152 145 -214 32 -30 122 -93 199 -142 151 -96 200 -140 236 -209 30 -58
                36 -144 15 -196 l-17 -39 26 24 c14 13 33 49 42 80 14 47 14 65 4 124 -19 113
                -40 147 -173 282 -68 69 -124 128 -126 133 -4 12 39 123 46 119 27 -12 105
                -38 146 -49 67 -17 112 -63 112 -114 0 -29 6 -43 29 -62 25 -22 35 -24 74 -19
                24 3 67 19 95 35 45 25 51 32 48 57 -4 31 -37 127 -98 284 -30 79 -35 103 -31
                146 6 63 -9 93 -93 179 l-59 60 9 45 c13 67 12 142 -2 138 -6 -2 -23 -25 -37
                -51 -14 -26 -28 -47 -31 -47 -4 0 -2 30 3 66 5 38 6 74 1 85 -8 17 -11 16 -30
                -14z"
                  />
                </g>
              </svg>
            </Box>
          </SectionStyle>
        )}

        {/*{smUp && (
          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Already have an account? {""}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        )}*/}
        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Get started absolutely free.
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Free forever. No credit card needed.
            </Typography>

            <AuthSocial />

            <RegisterForm />

            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              By registering, I agree to Minimal&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>
              {""}and{""}
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                Already have an account?{" "}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  Login
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
