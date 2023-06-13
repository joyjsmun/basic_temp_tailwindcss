import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", param: "/" },
  { name: "work", param: "/work" },
  { name: "About", param: "/about" },
];

const NavLink = ({
  param,
  name,
}: {
  children?: ReactNode;
  param: string;
  name: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"sm"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray", "gray"),
    }}
    href={`${param}`}
  >
    {name}
  </Link>
);
export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("brand.darkBlue", "brand.black")}
        px={8}
        py={4}
        pt={14}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ lg: "flex-end", sm: "space-between" }}
          gap={{ lg: 10, sm: "none" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            as={"nav"}
            spacing={2}
            color={"brand.black"}
            display={{ base: "none", md: "flex" }}
            bg={"brand.lightGray"}
            px={2}
            py={1}
            rounded={"full"}
            fontWeight={"bold"}
          >
            {Links.map((link) => (
              <NavLink key={link.name} param={link.param} name={link.name} />
            ))}
          </HStack>
          {/* dark mode */}
          <Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} param={link.param} name={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
