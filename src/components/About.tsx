import { Box, Button, Typography } from "@mui/material";
import Page from "./Page";
import thomasImage from "../assets/thomas.jpeg";

const About = () => {
  return (
    <Page title="About">
      <Box maxWidth={560} sx={{ "& > * + *": { mt: 2 } }}>
        <Typography variant="body1" component="p">
          Grantler Instruments is an independent instrument-building practice.
          Run and directed by Thomas Geissl, a post-digital lutherie graduate,
          it develops instruments, custom tools, and performance systems for new
          forms of music.
        </Typography>
        <Typography variant="body1" component="p">
          Some instruments are close to release, while others remain
          exploratory. Grantler Instruments is an evolving practice, with no
          fixed scale or format.
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 5 }}>
          Feel free to get in touch if you are interested in custom hardware,
          custom software, design support, installation help, or simply want
          to say hello.
        </Typography>
        <Typography variant="body1" component="p">
          I also welcome commissions and am available for workshops and talks
          on instrument building, musical interfaces, and creative technology.
        </Typography>
        <Box>
          <Button
            component="a"
            href="https://cal.com/thomasgeissl/30min"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            Book a meeting
          </Button>
        </Box>
        <Box
          component="img"
          src={thomasImage}
          alt="Thomas Geissl"
          sx={{
            display: "block",
            maxWidth: 420,
            width: "100%",
            height: "auto",
            borderRadius: 1,
          }}
        />
        <Typography variant="caption" color="text.secondary">
          Photo by Özgün Turgut
        </Typography>
      </Box>
    </Page>
  );
};
export default About;
