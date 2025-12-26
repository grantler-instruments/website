import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Things = () => {
    const navigate = useNavigate();
  const things = [
    { name: "Enomik 3000", destination: "/things/enomik" },
    { name: "Turntangilism 3000", destination: "/things/turntangilism" },
    { name: "Baby 8 Cubes", destination: "/things/b8c" },
    { name: "Deemex", destination: "/things/deemex" },
  ];
  return (
    <Box>
      <Typography variant="h1" color="primary">Things</Typography>
      {things.map(({ name, destination }) => (
        <Box key={name} sx={{cursor: 'pointer'}} onClick={() => navigate(destination)}>
          <Typography variant="h2">{name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Things;
