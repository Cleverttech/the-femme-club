import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const contactEmail = 'thefemmeclub.cy@gmail.com';
const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Hello The Femme Club')}`;

export default function ComingSoonHero() {
  return (
    <Box
      component="main"
      id="top"
      sx={{
        minHeight: '100svh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box
          component="header"
          sx={{
            minHeight: { xs: 76, sm: 98 },
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            component="a"
            href="#top"
            sx={{
              fontSize: { xs: 11, sm: 13 },
              fontWeight: 700,
              letterSpacing: { xs: '0.16em', sm: '0.24em' },
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            THE FEMME CLUB
          </Typography>
          <IconButton
            component="a"
            href="#top"
            aria-label="The Femme Club — back to top"
            sx={{ p: 0.5, '&:hover': { bgcolor: 'rgba(180,135,128,0.12)' } }}
          >
            <Box
              component="img"
              src="/femme-club-logo.png"
              alt=""
              sx={{ width: { xs: 46, sm: 62 }, height: { xs: 46, sm: 62 }, objectFit: 'contain' }}
            />
          </IconButton>
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 1.5, sm: 4, md: 6 }, pb: { xs: 2, md: 3 }, display: 'flex', flex: 1 }}
      >
        <Box
          component="section"
          aria-labelledby="hero-title"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: { xs: '14px', md: '18px 72px 18px 18px' },
            overflow: 'hidden',
            boxShadow: '0 20px 65px rgba(79,54,49,0.055)',
          }}
        >
          <Stack
            spacing={0}
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              px: { xs: 3.5, sm: 7, md: 7, lg: 11 },
              py: { xs: 7, sm: 9, md: 10 },
              minWidth: 0,
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontSize: { xs: 10, sm: 11 },
                letterSpacing: '0.25em',
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
              }}
            >
              OUR NEW DIGITAL HOME
            </Typography>

            <Typography
              id="hero-title"
              component="h1"
              variant="h1"
              sx={{
                m: 0,
                fontSize: { xs: 'clamp(3.7rem, 12vw, 5.3rem)', sm: '6.5rem', md: 'clamp(4.6rem, 6.5vw, 7.4rem)' },
                lineHeight: 0.97,
                letterSpacing: '-0.065em',
                maxWidth: 720,
              }}
            >
              Something
              <br />
              <Box component="span" sx={{ color: 'secondary.main' }}>beautiful</Box>
              <br />
              is coming.
            </Typography>

            <Typography sx={{ mt: { xs: 3, md: 5 }, fontSize: { xs: 17, md: 20 }, fontWeight: 600 }}>
              A space to move, connect and belong.
            </Typography>
            <Typography sx={{ mt: 1.75, color: 'text.secondary', fontSize: { xs: 14, md: 16 }, lineHeight: 1.85, maxWidth: 430 }}>
              The Femme Club brings women together through dance, events and beautiful shared experiences.
              A new chapter is on its way.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href={mailtoHref}
              endIcon={<ArrowOutwardRoundedIcon fontSize="small" />}
              sx={{ mt: 4.5, px: 3.5, py: 1.75, minWidth: 192, justifyContent: 'space-between', '&:hover': { bgcolor: '#806059' } }}
            >
              Get in touch
            </Button>

            <Typography
              sx={{ mt: { xs: 5, md: 7 }, fontSize: { xs: 10, sm: 11 }, letterSpacing: '0.11em', lineHeight: 1.9, color: 'text.secondary', fontWeight: 700 }}
            >
              Girlhood · Dance · Events · Community.
            </Typography>
          </Stack>

          <Box
            aria-label="The Femme Club original brand logo"
            sx={{
              position: 'relative',
              minHeight: { xs: 400, sm: 530, md: 660 },
              display: 'grid',
              placeItems: 'center',
              px: { xs: 3, sm: 5 },
              py: { xs: 7, md: 9 },
              background: 'radial-gradient(circle at 60% 38%, #F5E6DE 0%, transparent 52%), linear-gradient(150deg, #E9CFC4 0%, #D6B3A6 100%)',
              isolation: 'isolate',
            }}
          >
            <Box
              aria-hidden="true"
              sx={{ position: 'absolute', inset: { xs: 15, md: 28 }, border: '1px solid rgba(255,250,247,0.76)', borderRadius: { xs: '8px', md: '8px 50px 8px 8px' }, pointerEvents: 'none' }}
            />
            <Stack alignItems="center" spacing={{ xs: 3.5, md: 5 }} sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
              <Typography sx={{ color: '#86665F', fontSize: { xs: 10, sm: 11 }, letterSpacing: '0.2em', fontWeight: 700, textAlign: 'center' }}>
                WELCOME TO YOUR NEXT CHAPTER
              </Typography>
              <Box
                component="img"
                src="/femme-club-logo.png"
                alt="The Femme Club logo"
                sx={{ width: 'min(100%, 410px)', maxHeight: { xs: 290, sm: 370, md: 430 }, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 18px 26px rgba(98,63,57,0.08))' }}
              />
              <Typography sx={{ color: '#86665F', fontSize: { xs: 10, sm: 11 }, letterSpacing: '0.14em', fontWeight: 700, textAlign: 'center' }}>
                A LITTLE HOME AWAY FROM HOME
              </Typography>
            </Stack>
            <Typography sx={{ position: 'absolute', bottom: { xs: 27, md: 47 }, left: { xs: 32, md: 48 }, color: '#86665F', fontSize: 10, letterSpacing: '0.14em', fontWeight: 700 }}>
              EST. IN COMMUNITY
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
        <Box
          component="footer"
          sx={{ py: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: { xs: 2, md: 3 }, flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Typography sx={{ fontSize: 11, color: 'text.secondary', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} THE FEMME CLUB
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <MailOutlineRoundedIcon sx={{ fontSize: 17, color: 'secondary.main' }} aria-hidden="true" />
            <Typography component="a" href={`mailto:${contactEmail}`} sx={{ fontSize: 12, color: 'text.secondary', textDecoration: 'none', overflowWrap: 'anywhere', '&:hover': { textDecoration: 'underline' } }}>
              {contactEmail}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.75}>
            <PlaceOutlinedIcon sx={{ fontSize: 17, color: 'secondary.main' }} aria-hidden="true" />
            <Typography sx={{ fontSize: 11, color: 'text.secondary', letterSpacing: '0.06em' }}>PAPHOS, CYPRUS</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
