import { Box, Typography } from "@mui/material";
import BackButton from "./BackButton";

const Page = ({
  children,
  title,
  actions,
}: {
  children: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
}) => {
  return (
    <Box display={"flex"} flexDirection="column" gap={2}>
      <Box display={"flex"} gap={2}>
        <Typography variant="h1" color="primary">
          {title}
        </Typography>
        <BackButton></BackButton>
      </Box>
      {children}
      {actions && <Box>{actions}</Box>}
    </Box>
  );
};

export default Page;
