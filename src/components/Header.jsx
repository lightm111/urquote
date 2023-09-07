import { Box, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import logo from "/logo.svg";

const Header = () => {
  console.log(logo);
  return (
    <header>
      <Box w="100vw" h="40px" padding="5px 20px" color="white" display="flex">
        <Image boxSize="30px" src={logo} display="inline" />
        <Text>urquote</Text>
        <Spacer />
        <Box>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lightm111/urquote"
          >
            <Icon as={FaGithub} />
          </a>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
