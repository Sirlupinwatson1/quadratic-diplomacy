import React from "react";
import { Box, Text, Heading, VStack, HStack, Divider, Button as ChakraButton } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import QDIcon from "./Icons/QDIcon";
// displays a page header

export default function Header() {
  const headingColor = useColorModeValue("yellow.600", "yellow.500");
  return (
    <Box mb={8} mt={4} ml={4} w="full">
      <HStack>
        <VStack align="left">
          <HStack align="center">
            <Heading mb={1} color={headingColor}>
              Quadratic Diplomacy
            </Heading>
            <QDIcon size="45px" />
          </HStack>
          <Text color="purple.500" fontWeight="bold">
            by MOONSHOT COLLECTIVE
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
