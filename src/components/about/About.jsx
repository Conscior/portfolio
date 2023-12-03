import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsCodeSlash, BsBook, BsBriefcase } from "react-icons/bs";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const About = () => {
  return (
    <Box id="about" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          About me
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Coding Journey"}
            icon={<Icon as={BsCodeSlash} w={10} h={10} color="red" />}
            description={
              "My coding journey kicked off back in 2018, and sparked a deeper curiosity for technology and a desire to shape the digital landscape. Starting with Python, I took my very first steps into the world of coding, fascinated by the endless possibilities and the ability to create something meaningful from scratch."
            }
          />
          <Card
            heading={"Education"}
            icon={<Icon as={BsBook} w={10} h={10} color="red" />}
            description={
              "In 2018, I enrolled in CESI EXIA, where I immersed myself in the fundamentals of software development. The structured learning environment provided a solid foundation, and I quickly progressed from novice coder to someone with a deep appreciation for the art and science of programming."
            }
          />
          <Card
            heading={"Work"}
            icon={<Icon as={BsBriefcase} w={10} h={10} color="red" />}
            description={
              "Since then, my journey has been a continuous cycle of learning, experimenting, and refining my skills. I've had the opportunity to work on a variety of projects, each one contributing to my growth as a developer."
            }
          />
          {/* <Card
            heading={"Heading"}
            // icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Heading"}
            // icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
