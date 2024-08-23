import React, { useState } from "react";
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
} from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";
import GridElements from "./GridElements/GridElements";
import {
  FaYoutube,
  FaTwitch,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { PiHandHeartFill } from "react-icons/pi";
import profileImage from "../../.assets/roxas-portrait.jpg";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: theme.palette.background.gradient,
  padding: "20px",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  gap: theme.spacing(2),
}));

const MainPage = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = 200;

  const handleClose = () => {
    setOpen(false);
  };

  const YoutubeIcon = () => (
    <FaYoutube style={{ fontSize: iconSize, color: "#b2071d" }} />
  );
  const TwitchIcon = () => (
    <FaTwitch style={{ fontSize: iconSize, color: "#6441a5" }} />
  );
  const FacebookIcon = () => (
    <FaFacebook style={{ fontSize: iconSize, color: "#3b5998" }} />
  );
  const InstagramIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="instagram-gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <FaInstagram fill="url(#instagram-gradient)" />
    </svg>
  );
  const TiktokIcon = () => (
    <FaTiktok style={{ fontSize: iconSize, color: "#fff" }} />
  );
  const TipIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heart-gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#c7000d" />
          <stop offset="100%" stopColor="#a1182a" />
        </linearGradient>
      </defs>
      <PiHandHeartFill fill="url(#heart-gradient)" />
    </svg>
  );

  return (
    <MainBox>
      <GridContainer container sx={{ marginBottom: "30px" }}>
        <Grid item xs={12} sm={4} md={1}>
          <img
            src={profileImage}
            alt="Imagen de la pagina"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "30px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
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
          redirectionURL="https://www.youtube.com/@Roxas-fb2oj"
        />
        <GridElements
          icon={TwitchIcon}
          size={4}
          title="Twitch"
          redirectionURL="https://www.twitch.tv/roxas826"
        />
        <GridElements
          icon={FacebookIcon}
          size={4}
          title="Facebook"
          redirectionURL="https://www.facebook.com/profile.php?id=61564332927048"
        />
        <GridElements
          icon={InstagramIcon}
          size={4}
          title="Instagram"
          redirectionURL="https://www.instagram.com/roxas_19_"
        />
        <GridElements
          icon={TiktokIcon}
          size={4}
          title="TikTok"
          redirectionURL="https://www.tiktok.com/@roxas_19_"
        />
        <GridElements
          icon={TipIcon}
          size={4}
          title="Donacion"
          redirectionURL="https://streamelements.com/roxas-fb2oj/tip"
        />
      </GridContainer>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#191919",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">AVISO</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "150px",
            textAlign: "center",
          }}
        >
          <FaTools size={74} color="#6288a1" style={{ margin: "20px 0" }} />
          <Typography variant="h6" align="center" gutterBottom>
            🌟 <strong>¡Hola a todos!</strong> 🌟
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Estoy emocionado/a de compartir con ustedes que la página en la que
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
