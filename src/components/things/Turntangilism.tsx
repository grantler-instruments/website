import { Box, Button } from "@mui/material";
import ReactPlayer from "react-player";

const Turntangilism = () => {
  return (
    <Box>
      <p>
        Turntangilism 3000 is a postdigital extension kit for traditional
        turntable setups. It adds digital sampling and sequencing capabilities
        to vinyl performances, allowing for a seamless blend of analog and
        digital techniques. While using digital technology, Turntangilism 3000
        is designed to preserve the tactile and expressive qualities of vinyl
        DJing.
      </p>
      <ReactPlayer src="https://www.youtube.com/watch?v=1JE4SavnOqo" />
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://nime2026.org/proceedings/215.html"
          target="_blank"
          rel="noopener"
        >
          NIME 2026 Paper
        </Button>
      </Box>
    </Box>
  );
};

export default Turntangilism;
