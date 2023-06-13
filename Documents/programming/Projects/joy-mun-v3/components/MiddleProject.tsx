import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function MiddleProject() {
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
            {/* Projects */}
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

            <Flex justifyContent={"flex-end"} width={"full"}>
              <Stack
                bgColor={"brand.white"}
                width={"full"}
                height={"fit-content"}
                color={"brand.black"}
              >
                {/* Bottom Buttons */}
                <HStack border={"solid 2px"} borderColor={"brand.black"}>
                  <Box width={"50%"} padding={6} borderRight={"solid 2px"}>
                    <Text
                      textAlign={"center"}
                      textStyle={"bebas"}
                      fontFamily={"Bebas Neue"}
                    >
                      Buy Me A Coffee
                    </Text>
                    <Text textAlign={"center"}>
                      If you like my work you can buy me a coffee(2 Matic)
                    </Text>
                  </Box>
                  <Box width={"50%"} textAlign={"center"} padding={6}>
                    <Text
                      textAlign={"center"}
                      textStyle={"bebas"}
                      fontFamily={"Bebas Neue"}
                    >
                      Up
                    </Text>
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
