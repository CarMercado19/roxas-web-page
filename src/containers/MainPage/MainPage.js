import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { styled, useMediaQuery } from '@mui/system';
import GridElements from './GridElements/GridElements';
import {
  FaYoutube,
  FaTwitch,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTools,
  FaDiscord,
} from 'react-icons/fa';
import { PiHandHeartFill } from 'react-icons/pi';
import profileImage from '../../.assets/roxas-portrait.jpg';

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: theme.palette.background.gradient,
  padding: '20px',
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  gap: theme.spacing(2),
}));

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const iconSize = 200;
  const iconColor = '#f6f6f6';

  const YoutubeIcon = () => (
    <FaYoutube style={{ fontSize: iconSize, color: iconColor }} />
  );
  const TwitchIcon = () => (
    <FaTwitch style={{ fontSize: iconSize, color: iconColor }} />
  );
  const FacebookIcon = () => (
    <FaFacebook style={{ fontSize: iconSize, color: iconColor }} />
  );
  const InstagramIcon = () => (
    <FaInstagram style={{ fontSize: iconSize, color: iconColor }} />
  );
  const TiktokIcon = () => (
    <FaTiktok style={{ fontSize: iconSize, color: iconColor }} />
  );
  const DiscordIcon = () => (
    <FaDiscord style={{ fontSize: iconSize, color: iconColor }} />
  );
  const TipIcon = () => (
    <PiHandHeartFill style={{ fontSize: iconSize, color: iconColor }} />
  );

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('dialogVisualizado');

    if (!hasSeenDialog) {
      setOpen(true);
      localStorage.setItem('dialogVisualizado', 'true');
    }
  }, []);

  return (
    <MainBox>
      <GridContainer container sx={{ marginBottom: '30px' }}>
        <Grid item xs={12} sm={4} md={1}>
          <img
            src={profileImage}
            alt="Imagen de la pagina"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '30px',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '3rem',
                lg: '4rem',
              },
            }}
          >
            RoXas-19-
          </Typography>
        </Grid>
      </GridContainer>
      <GridContainer container>
        <GridElements
          icon={YoutubeIcon}
          size={4}
          title="YouTube"
          redirectionURL="https://www.youtube.com/@Roxas-19"
          bgColor="#b2071d"
        />
        <GridElements
          icon={TwitchIcon}
          size={4}
          title="Twitch"
          redirectionURL="https://www.twitch.tv/roxas826"
          bgColor="#6441a5"
        />
        <GridElements
          icon={FacebookIcon}
          size={4}
          title="Facebook"
          redirectionURL="https://www.facebook.com/profile.php?id=61564332927048"
          bgColor="#3b5998"
        />
        <GridElements
          icon={InstagramIcon}
          size={4}
          title="Instagram"
          redirectionURL="https://www.instagram.com/roxas_19_"
          bgColor="linear-gradient(135deg, rgba(240,148,51,1) 0%, rgba(230,104,60,1) 25%, rgba(220,39,67,1) 50%, rgba(204,35,102,1) 75%, rgba(188,24,136,1) 100%)"
        />
        <GridElements
          icon={TiktokIcon}
          size={4}
          title="TikTok"
          redirectionURL="https://www.tiktok.com/@roxas_19_"
          bgColor="#141414"
        />
        <GridElements
          icon={DiscordIcon}
          size={4}
          title="Discord"
          redirectionURL="https://discord.gg/CptjqutDDG"
          bgColor="#7289da"
        />
        <GridElements
          icon={TipIcon}
          size={4}
          title="Donacion"
          redirectionURL="https://streamelements.com/roxas-fb2oj/tip"
          bgColor="linear-gradient(135deg, rgba(199,0,13,1) 0%, rgba(161,24,42,1) 100%)"
        />
      </GridContainer>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#191919',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4">AVISO</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '150px',
            textAlign: 'center',
          }}
        >
          <FaTools size={74} color="#6288a1" style={{ margin: '20px 0' }} />
          <Typography variant="h6" align="center" gutterBottom>
            🌟 <strong>¡Hola a todos!</strong> 🌟
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Estoy emocionado de compartir con ustedes que la página en la que
            estoy trabajando está en una fase temprana de desarrollo. 🎉🔧
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Aún estoy afinando detalles, añadiendo características nuevas y
            trabajando arduamente para ofrecerles la mejor experiencia posible.
            Les agradezco mucho su paciencia y apoyo mientras avanzamos en este
            proyecto.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            ¡Estén atentos a más actualizaciones! 🚀✨
          </Typography>
          <Typography variant="body1" align="center">
            ¡Gracias por ser parte de este viaje!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </MainBox>
  );
};

export default MainPage;
