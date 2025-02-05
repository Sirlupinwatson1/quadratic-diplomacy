import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import React from "react";
import ConnectButton from "../Buttons/ConnectButton";
import QDIcon from "../Icons/QDIcon";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const headingColor = useColorModeValue("yellow.600", "yellow.500");

  return (
    <Box>
      <HStack justify="space-between" w="100%" h={16}>
        <NextLink href="/">
          <VStack _hover={{ cursor: "pointer" }} align="left" spacing="0">
            <HStack>
              <Heading fontSize="md" color={headingColor}>
                Quadratic Diplomacy
              </Heading>
              <QDIcon size="25px" />
            </HStack>
            <Text fontSize="xs" color="purple.500" fontWeight="bold" as="i">
              by MOONSHOT COLLECTIVE{" "}
            </Text>
          </VStack>
        </NextLink>

        <HStack>
          <ThemeToggle />
          <ConnectButton />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
