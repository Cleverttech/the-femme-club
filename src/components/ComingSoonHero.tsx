
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import {
  ArrowOutward,
  FavoriteBorder,
  MailOutlined,
} from '@mui/icons-material';

import { brandColors } from '../theme';

const CONTACT_EMAIL = 'thefemmeclub.cy@gmail.com';
const LOGO_PATH = '/femme-club-logo.png';

export default function ComingSoonHero() {
  return (
    <Box
      component="main"
      id="main"
      sx={{
        minHeight: '100svh',
        bgcolor: brandColors.cream,
      }}
    >
      <Container maxWidth="xl" disableGutters>

        {/* Header */}
        <Box
          component="header"
          sx={{
            px: { xs: 2.5, md: 5 },
            py: 2.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            component="a"
            href="#main"
            sx={{
              textDecoration: 'none',
              color: brandColors.brown,
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
          >
            THE FEMME CLUB
          </Typography>

          <Box
            component="img"
            src={LOGO_PATH}
            alt="The Femme Club logo"
            sx={{
              width: { xs: 50, md: 65 },
              height: { xs: 50, md: 65 },
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Hero */}
        <Box
          component="section"
          sx={{
            mx: { xs: 1.5, md: 3 },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            bgcolor: brandColors.white,
            overflow: 'hidden',
            borderRadius: {
              xs: '20px',
              md: '28px 72px 20px 20px',
            },
          }}
        >

          {/* Left side */}
          <Stack
            spacing={4}
            sx={{
              px: {
                xs: 3.5,
                sm: 6,
                md: 7,
                lg: 10,
              },
              py: {
                xs: 7,
                md: 10,
              },
              justifyContent: 'center',
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                color: brandColors.roseDeep,
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
              }}
            >
              OUR NEW DIGITAL HOME
            </Typography>

            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: {
                  xs: 'clamp(3.8rem, 13vw, 5.4rem)',
                  sm: '6rem',
                  md: 'clamp(5rem, 7vw, 8rem)',
                },
                color: brandColors.brown,
                m: 0,
              }}
            >
              Coming
              <br />
              <Box
                component="span"
                sx={{
                  color: brandColors.roseDeep,
                }}
              >
                Soon.
              </Box>
            </Typography>

            <Stack spacing={2}>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.15rem',
                    md: '1.3rem',
                  },
                  fontWeight: 600,
                  color: brandColors.brown,
                }}
              >
                A space to move, connect and belong.
              </Typography>

              <Typography
                sx={{
                  color: brandColors.brownLight,
                  fontSize: {
                    xs: '0.95rem',
                    md: '1rem',
                  },
                  lineHeight: 1.9,
                  maxWidth: 460,
                }}
              >
                The Femme Club brings women together
                through dance, events and beautiful
                shared experiences.
                A new chapter is on its way.
              </Typography>
            </Stack>

            <Box>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowOutward />}
                href={`mailto:${CONTACT_EMAIL}`}
                sx={{
                  px: 4,
                  py: 1.8,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.045em',
                }}
              >
                Get in touch
              </Button>
            </Box>

            <Typography
              sx={{
                color: brandColors.roseDeep,
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                pt: 3,
                lineHeight: 2,
              }}
            >
              Girlhood · Dance · Events · Community.
            </Typography>
          </Stack>

          {/* Right side */}
          <Box
            sx={{
              position: 'relative',
              minHeight: {
                xs: 440,
                md: 700,
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              background: `
                linear-gradient(
                  145deg,
                  ${brandColors.roseLight} 0%,
                  #D7B5A8 100%
                )
              `,
            }}
          >
            {/* Decorative frame */}
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                inset: {
                  xs: 15,
                  md: 30,
                },
                border: '1px solid rgba(255,255,255,0.7)',
                borderRadius: {
                  xs: '18px',
                  md: '28px',
                },
              }}
            />

            <Stack
              spacing={4}
              sx={{
                position: 'relative',
                zIndex: 1,
                px: 4,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '0.65rem',
                    md: '0.7rem',
                  },
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: brandColors.roseDeep,
                  textAlign: 'center',
                }}
              >
                WELCOME TO YOUR NEXT CHAPTER
              </Typography>

              <Box
                component="img"
                src={LOGO_PATH}
                alt="The Femme Club"
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: 300,
                    md: 430,
                  },
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />

              <Typography
                sx={{
                  color: brandColors.roseDeep,
                  fontSize: '0.7rem',
                  letterSpacing: '0.16em',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                A LITTLE HOME AWAY FROM HOME
              </Typography>
            </Stack>

            <Typography
              sx={{
                position: 'absolute',
                bottom: 42,
                left: 48,
                color: brandColors.roseDeep,
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                fontWeight: 700,
              }}
            >
              EST. IN COMMUNITY
            </Typography>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            px: { xs: 3, md: 6 },
            py: 4,
          }}
        >
          <Stack
            spacing={2.5}
            sx={{ alignItems: 'center' }}
          >
            <Stack
              direction={{
                xs: 'column',
                md: 'row',
              }}
              spacing={2}
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: brandColors.brownLight }}
              >
                © {new Date().getFullYear()} THE FEMME CLUB
              </Typography>

              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                underline="hover"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: brandColors.brownLight,
                  fontSize: '0.8rem',
                }}
              >
                <MailOutlined fontSize="small" />
                {CONTACT_EMAIL}
              </Link>

              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: 'center' }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: brandColors.brownLight,
                  }}
                >
                  MADE FOR CONNECTION
                </Typography>

                <FavoriteBorder
                  sx={{
                    color: brandColors.roseDeep,
                    fontSize: 18,
                  }}
                />
              </Stack>
            </Stack>

            <Divider sx={{ width: '100%' }} />

            <Typography
              variant="caption"
              sx={{
                textAlign: 'center',
                fontSize: '0.78rem',
                color: brandColors.brownLight,
              }}
            >
              Designed & Developed by{' '}
              <Box
                component="span"
                sx={{
                  color: brandColors.roseDeep,
                  fontWeight: 700,
                }}
              >
                Sorachat studios
              </Box>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
