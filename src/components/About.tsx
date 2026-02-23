import { Box, Typography } from "@mui/material";
import Page from "./Page";

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
      </Box>
    </Page>
  );
};
export default About;
