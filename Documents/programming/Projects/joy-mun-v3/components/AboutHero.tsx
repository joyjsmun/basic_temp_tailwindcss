import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function AboutHero() {
  return (
    <Flex
      width={"full"}
      height={{ lg: "63vh", sm: "40vh" }}
      justifyContent={"center"}
      alignItems={"end"}
      pb={{ lg: 24, sm: "10rem" }}
      bg={useColorModeValue("brand.darkBlue", "brand.black")}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"flex-end"}
        color={useColorModeValue("brand.white", "brand.white")}
      >
        <VStack alignItems={"flex-end"} pl={28}>
          <Text textStyle="h1" fontFamily={"ProtoMono-LightShadow"}>
            Joy Mun
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
