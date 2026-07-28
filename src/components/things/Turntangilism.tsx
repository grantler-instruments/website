import { Box, Button } from "@mui/material";
import ReactPlayer from "react-player";
import overview from "../../assets/things/turntangilism/overview_resized.png";
import tamphall8r from "../../assets/things/turntangilism/tamphall8r_top.png";
import tamplate from "../../assets/things/turntangilism/tamplate_overview.png";
import tamplepack8 from "../../assets/things/turntangilism/tamplepack8_overview.png";
import tamples from "../../assets/things/turntangilism/tamples_10.png";
import tamplifier from "../../assets/things/turntangilism/tamplifier_overview.png";
import tamputer from "../../assets/things/turntangilism/tamputer_overview.png";

const detailImages = [
  { src: tamples, alt: "Painted Tamples" },
  { src: tamputer, alt: "Tamputer with Bela board and Enomik dongle" },
  { src: tamplifier, alt: "Tamplifier recording unit" },
  { src: tamplepack8, alt: "Tamplepack8 sample assignment interface" },
  { src: tamphall8r, alt: "Tamphall8r radial sequencer" },
  { src: tamplate, alt: "Tamplate sample playback device" },
];

const Turntangilism = () => {
  return (
    <Box>
      <Box
        component="img"
        src={overview}
        alt="Turntangilism 3000 setup"
        sx={{ display: "block", width: "100%", height: "auto", mb: 2 }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
          mb: 2,
        }}
      >
        {detailImages.map((image) => (
          <Box
            key={image.alt}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{ width: "100%", height: "auto", display: "block" }}
          />
        ))}
      </Box>
      <p>
        Turntangilism 3000 is a postdigital extension kit for traditional
        turntable setups. It adds digital sampling and sequencing capabilities
        to vinyl performances, allowing for a seamless blend of analog and
        digital techniques. While using digital technology, Turntangilism 3000
        is designed to preserve the tactile and expressive qualities of vinyl
        DJing.
      </p>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "calc((100% - 16px) / 2)",
            md: "calc((100% - 32px) / 3)",
          },
          aspectRatio: "16 / 9",
        }}
      >
        <ReactPlayer
          src="https://www.youtube.com/watch?v=1JE4SavnOqo"
          width="100%"
          height="100%"
        />
      </Box>
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
