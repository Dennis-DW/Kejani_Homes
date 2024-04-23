import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/searchFilters";
import Property from "../components/property";
import noresult from "../assets/images/noresult.svg";
import { fetchApi, baseUrl } from "@/utils/fetchApi";

const Search = ({ properties }) => {
 const [searchFilters, setSearchFilters] = useState(false);
 const router = useRouter();

 return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg={"gray.100"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
        fontWeight={"black"}
        fontSize={"lg"}
        justifyContent={"center"}
        alignItems={"center"}
        p="2"
      >
        <Text>Search Property By Filters</Text>
        <Icon
          paddingLeft={"10px"}
          w={6}
          as={BsFilter}
          ml={2}
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize={"2xl"} p={"4"} fontWeight={"bold"}>
        Properties {router.query.purpose}
      </Text>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        p={4}
      >
        {properties.map((property) => (
          <Box key={property.id} flex="1 1 calc(33.333% - 20px)" margin={2}>
            <Property property={property} />
          </Box>
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent={"center"}
          p={4}
          alignItems={"center"}
          flexDirection={"column"}
          marginTop={"5"}
          marginBottom={"5"}
        >
          <Image src={noresult} width={300} height={300} alt={"No Data"} />
          <Text fontSize={"2xl"}>No Properties Found</Text>
        </Flex>
      )}
    </Box>
 );
};
export default Search;

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "monthly"; 
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";
   
    const data = await fetchApi(
       `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    );
   
    return {
       props: {
         properties: data?.hits,
       },
    };
   }
   
