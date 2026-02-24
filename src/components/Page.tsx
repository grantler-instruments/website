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
    <Box
      display="flex"
      flexDirection="column"
      maxHeight="75dvh"
      width="fit-content"
      maxWidth="100%"
      minWidth={0}
      p={2}
    >
      <Box
        display="flex"
        gap={2}
        minWidth={0}
        alignItems="flex-start"
        flexShrink={0}
      >
        <Typography variant="h1" color="primary" sx={{ minWidth: 0, flex: 1, overflowWrap: "break-word" }}>
          {title}
        </Typography>
        <BackButton />
      </Box>
      <Box sx={{ flex: 1, minHeight: 0, overflow: "auto", mt: 2 }}>
        {children}
        {actions && <Box>{actions}</Box>}
      </Box>
    </Box>
  );
};

export default Page;
