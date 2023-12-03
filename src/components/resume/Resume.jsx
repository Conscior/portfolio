import { Box, Flex, HStack, Heading, IconButton } from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  return (
    <Box id="resume" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
      <HStack align="center" justify="center" justifyItems="center">
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Download my Resume here
        </Heading>
        <IconButton
          as="a"
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Download"
          size="lg"
          fontSize="20px"
          icon={<BsDownload />}
          href="src/Resume - Ryad Abderrahim.pdf"
          download="Resume - Ryad Abderrahim"
        />
      </HStack>
    </Box>
  );
};

export default Resume;
