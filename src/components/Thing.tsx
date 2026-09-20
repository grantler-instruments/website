import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import type { MetaFunction } from "react-router";
import BackButton from "./BackButton";
import ScrollPane from "./ScrollPane";
import { getThingBySlug } from "../data/things";

export const meta: MetaFunction = ({ params }) => {
  const thing = getThingBySlug(params.id);
  return [{ title: `${thing?.title ?? "Unknown Thing"} · Grantler Instruments` }];
};

const Thing = () => {
  const { id } = useParams();
  const thing = getThingBySlug(id);
  const title = thing?.title ?? "Unknown Thing";
  const Component = thing?.Component;

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      height={"75dvh"}
      width={"100%"}
      minWidth={0}
      p={2}
    >
      <Box
        display={"flex"}
        gap={2}
        minWidth={0}
        alignItems="flex-start"
        flexShrink={0}
      >
        <Typography
          variant="h2"
          sx={{
            display: { xs: "none", sm: "block" },
            minWidth: 0,
            flex: 1,
            overflowWrap: "break-word",
          }}
        >
          {title}
        </Typography>
        <BackButton />
      </Box>
      <ScrollPane sx={{ mt: 2 }}>
        <Box p={2}>{Component && <Component />}</Box>
      </ScrollPane>
    </Box>
  );
};

export default Thing;
