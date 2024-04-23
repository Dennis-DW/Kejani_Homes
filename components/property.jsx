import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar, useColorModeValue } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "@/assets/images/house.jpeg";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

  const hoverBg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <Link href={`/property/${externalID}`} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }} // Simple scale animation on hover
        transition={{ duration: 0.3 }} // Smooth transition
      >
        <Flex
          flexWrap="wrap"
          w={380}
          p={5}
          justifyContent="flex-start"
          cursor="pointer"
        >
          <Box w="400px" h="400px" position="relative" overflow="hidden">
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: hoverBg,
                zIndex: 1,
                y: y, // Apply the y transform to create the parallax effect
              }}
            />
            <Box overflow="hidden">
              <Image
                src={coverPhoto?.url || DefaultImage}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
          <Box w={"full"}>
            <Flex
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center">
                <Box paddingRight={3} color="green.400">
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontSize="xl" fontWeight="bold">
                  ksh {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <Avatar
                  size={"sm"}
                  h={"50px"}
                  w={"50px"}
                  name={agency?.name}
                  src={agency?.logo?.url}
                />
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              padding={"1"}
              justifyContent={"space-between"}
              w={"250px"}
              color={"blue.400"}
            >
              {rooms}
              <FaBed /> | {baths}
              <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Text fontSize="lg" fontWeight="medium">
              {title.length > 28 ? `${title.substring(0, 28)}...` : title}
            </Text>
          </Box>
        </Flex>
      </motion.div>
    </Link>
  );
};

export default Property;
