import { Box, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import ImageScrollbar from "../../components/imagescroll";
import { Avatar } from "@chakra-ui/react";

//  the stripHtmlTags function
function stripHtmlTags(str) {
  if (str === null || str === "") return "";
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  //  const {
  //     price,
  //     rentFrequency,
  //     rooms,
  //     title,
  //     baths,
  //     area,
  //     agency,
  //     isVerified,
  //     description,
  //     type,
  //     purpose,
  //     furnishingStatus,
  //     amenities,
  //     photos,
  //  } = PropertyDetails;
  const plainTextDescription = stripHtmlTags(description);

  return (
    <Box maxWidth={"1000px"} margin={"auto"} p={"4"}>
      {photos && <ImageScrollbar data={photos} />}
      <Box w={"full"} p={"6"}>
        <Flex paddingTop={2} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight={3} color="blue">
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
        <Box marginTop={"3"}>
          <Text fontSize="lg" fontWeight="bold" marginBottom={"3"}>
            {title}
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight={"2"}
            color={"#174149"}
          >
            {plainTextDescription}
          </Text>
        </Box>
        <Flex
          flexWrap={"wrap"}
          textTransform={"uppercase"}
          justifyContent={"space-between"}
        >
          <Flex
            justifyContent={"space-between"}
            w={"400px"}
            borderBottom={"1px"}
            borderColor={"blackAlpha.500"}
            p={"2"}
          >
            <Text>Property Type</Text>
            <Text fontWeight={"bold"}>{type}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            w={"400px"}
            borderBottom={"1px"}
            borderColor={"blackAlpha.500"}
            p={"2"}
          >
            <Text>Purpose</Text>
            <Text fontWeight={"bold"}>{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent={"space-between"}
              w={"400px"}
              borderBottom={"1px"}
              borderColor={"blackAlpha.500"}
              p={"2"}
            >
              <Text>Furnishing</Text>
              <Text fontWeight={"bold"}>{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box p={"2"}>
          {amenities && (
            <Text fontWeight={"bold"} fontSize={"3xl"} marginTop={"3"}>
              Amenities
            </Text>
          )}

          <Flex flexWrap={"wrap"} color={"#174149"} p={"2"}>
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <Text
                  key={amenity.text}
                  fontWeight={"bold"}
                  fontSize={"md"}
                  p={"2"}
                  borderRadius={"md"}
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
