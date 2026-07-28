import { Box, Typography } from "@mui/material";
import BackButton from "./BackButton";
import ScrollPane from "./ScrollPane";

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
      height="75dvh"
      width="100%"
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
      <ScrollPane sx={{ mt: 2 }}>
        {children}
        {actions && <Box>{actions}</Box>}
      </ScrollPane>
    </Box>
  );
};

export default Page;
