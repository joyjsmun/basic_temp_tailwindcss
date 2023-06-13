import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function MiddleInfo() {
  return (
    <Flex
      justifyContent={"flex-end"}
      width={"full"}
      height={{ lg: "max-content", sm: "50vh" }}
      bg={useColorModeValue("brand.darkBlue", "brand.black")}
    >
      <Box
        bgColor={"brand.white"}
        width={"85%"}
        height={"fit-content"}
        color={"brand.black"}
      >
        <HStack>
          <Flex flexDirection={"column"} gap={{ lg: 20, sm: 2 }}>
            <VStack
              alignItems={{ lg: "flex-start", sm: "center" }}
              px={{ lg: 20, sm: 10 }}
              py={10}
            >
              <Box width={{ lg: "50%", sm: "full" }}>
                <Text>/Work</Text>
                <Text textStyle={"bebas"} fontFamily={"Bebas Neue"}>
                  PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
                  INTERSECTION OF CREATIVITY AND USERFRIENDLY INTERFACES. I
                  CREATE MEMORABLE WEB EXPERIENCES.
                </Text>
              </Box>
            </VStack>
            <VStack
              alignItems={{ lg: "flex-end", sm: "center" }}
              px={20}
              py={10}
            >
              <Box width={{ lg: "50%", sm: "full" }}>
                <Text textAlign={"left"}>/Award</Text>
                <Text textStyle={"bebasSm"} fontFamily={"Bebas Neue"}>
                  - EthBogota Finalist
                </Text>
                <Text textStyle={"bebasSm"} fontFamily={"Bebas Neue"}>
                  - EthSeoul Scaling #1
                </Text>
                <Text textStyle={"bebasSm"} fontFamily={"Bebas Neue"}>
                  - Polygon & pit Demo Day1 - Winner
                </Text>
                <Text textStyle={"bebasSm"} fontFamily={"Bebas Neue"}>
                  - EthSanFrancisco
                </Text>
                <Text textStyle={"bebasSm"} fontFamily={"Bebas Neue"}>
                  - EthTokyo
                </Text>
              </Box>
            </VStack>
            <VStack
              alignItems={{ lg: "flex-start", sm: "center" }}
              px={20}
              py={10}
            >
              <Box width={{ lg: "50%", sm: "full" }}>
                <Text textAlign={"left"}>/Life</Text>
                <Text textStyle={"bebas"} fontFamily={"Bebas Neue"}>
                  WHEN I'M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I'M
                  PROBABLY GOING TO GYM OR READING BOOKS.
                </Text>
              </Box>
            </VStack>
            <Flex justifyContent={"flex-end"} width={"full"}>
              <Stack
                bgColor={"brand.white"}
                width={"full"}
                height={"fit-content"}
                color={"brand.black"}
              >
                {/* Bottom Buttons */}
                <HStack
                  textStyle={"bebas"}
                  fontFamily={"Bebas Neue"}
                  border={"solid 2px"}
                  borderColor={"brand.black"}
                >
                  <Box width={"50%"} padding={6} borderRight={"solid 2px"}>
                    <Text textAlign={"center"}>Work</Text>
                  </Box>
                  <Box width={"50%"} textAlign={"center"} padding={6}>
                    <Text>About</Text>
                  </Box>
                </HStack>
              </Stack>
            </Flex>
          </Flex>
        </HStack>
      </Box>
    </Flex>
  );
}
