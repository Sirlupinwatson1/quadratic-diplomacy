import {
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import VoteInput from "../../Inputs/VoteInput";

function VoteCard() {
  const headingColor = useColorModeValue("yellow.600", "yellow.500");

  const members = ["0xad", "0xad", "0xad", "0xad", "0xad", "0xad"];

  return (
    <VStack align="left" w="100%" spacing="0.5rem">
      <Heading fontSize="1.5rem" color={headingColor}>
        2. Vote
      </Heading>
      <Text pb="2rem" fontSize="1rem">
        Vote each member based on their contributions.
        <br /> You have 79 votes left.
      </Text>
      <VStack w="100%" align="left" spacing="1rem">
        {members.map((member) => (
          <>
            <HStack justify="space-between">
              <Text>
                <Avatar
                  mr="0.5rem"
                  boxSize="1.5em"
                  src="https://siasky.net/AAB-yQ5MuGLqpb5fT9w0gd54RbDfRS9sZDb2aMx9NeJ8QA"
                />
                {member}
              </Text>
              <VoteInput />
            </HStack>
            <Divider />
          </>
        ))}
      </VStack>
    </VStack>
  );
}

export default VoteCard;
