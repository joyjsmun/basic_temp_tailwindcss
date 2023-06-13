import { Box } from "@chakra-ui/react";
import Hero from "../Hero";
import LeftBanner from "../LeftBanner";
import MiddleInfo from "../MiddleInfo";
import TopBanner from "../TopBanner";

export default function Primary() {
  return (
    <Box>
      <Hero />
      <MiddleInfo />
    </Box>
  );
}
