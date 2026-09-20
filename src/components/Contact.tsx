import { Button, Typography } from "@mui/material";
import type { MetaFunction } from "react-router";
import Page from "./Page";

export const meta: MetaFunction = () => [{ title: "Contact · Grantler Instruments" }];

const Contact = () => {
  return (
    <Page title="Contact">
      <Typography>
        Feel free to send me an email: thomas at domain.
      </Typography>
      <Button
        component="a"
        href="https://cal.com/thomasgeissl/30min"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Book a meeting
      </Button>
    </Page>
  );
};

export default Contact;
