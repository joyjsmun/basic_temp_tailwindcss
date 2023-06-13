import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg={useColorModeValue("brand.darkBlue", "brand.black")} py={"4"}>
      <Flex
        justifyContent={"center"}
        textAlign={"center"}
        width={"80%"}
        color={"brand.white"}
        paddingLeft={"35vw"}
      >
        <Text
          fontSize={{ lg: "1.2rem", sm: "0.2rem" }}
          fontFamily={"Bebas Neue"}
        >
          ⓒ 2023 Site by Joy Mun : )
        </Text>
      </Flex>
    </Flex>
  );
}
