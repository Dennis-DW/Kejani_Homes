import { useEffect, useState } from "react";
import {
 Box,
 Flex,
 Text,
 Icon,
 Input,
 Spinner,
 Button,
 Select,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const SearchFilters = () => {
 // State to hold the filters data
 const [filters] = useState(filterData);
 // State to hold the search term for location search
 const [searchTerm, setSearchTerm] = useState("");
 // State to hold the location data fetched from the API
 const [locationData, setLocationData] = useState();
 // State to control the visibility of the location search dropdown
 const [showLocations, setShowLocations] = useState(false);
 // State to control the loading state of the location search
 const [loading, setLoading] = useState(false);
 // Hook to access the Next.js router
 const router = useRouter();

 // Function to search properties based on selected filter values
 const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    // Update the URL with the new query parameters
    router.push({ pathname: path, query: query });
 };

 // Effect to fetch location data based on the search term
 useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
 }, [searchTerm]);

 return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {/* Map over filters to render a Select component for each */}
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      {/* Location search functionality */}
      <Flex flexDir="column">
        <Button
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2"
        >
          Search Location
        </Button>
        {showLocations && (
          <Flex flexDir="column" pos="relative" paddingTop="2">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                pos="absolute"
                cursor="pointer"
                right="5"
                top="5"
                zIndex="100"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <Box height="300px" overflow="auto">
                {locationData?.map((location) => (
                 <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                 >
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100"
                    >
                      {location.name}
                    </Text>
                 </Box>
                ))}
                {!loading && !locationData?.length && (
                 <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5"
                 >
                    <Image src={noresult} />
                    <Text fontSize="xl" marginTop="3">
                      Waiting to search!
                    </Text>
                 </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
 );
};
export default SearchFilters;
