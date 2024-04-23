import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fetchApi } from "@/utils/fetchApi";
import { baseUrl } from "@/utils/fetchApi";
import Property from "@/components/property";
import { motion } from "framer-motion";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        m="10"
        bgColor={"#174149"}
      >
        <Image src={imageUrl} alt="banner" width={450} height={200} />
        <Box p={3}>
          <Text fontSize="xl" fontWeight="bold" textColor={"gray"}>
            {purpose}
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {title1}
            <br />
            {title2}
          </Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom={"3"} color="black">
            {desc1}
            <br />
            {desc2}
          </Text>
          <Link href={linkName} passHref>
            <Button fontSize="xl" bg={" #F45B3C"}>
              {buttonText}
            </Button>
          </Link>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A Home"
        title1="Find Your Dream Home"
        title2="For All Budgets"
        desc1={"Find the perfect home for you"}
        desc2={"Explore the best homes for rent "}
        buttonText={"View Rent Homes"}
        linkName={"/search?purpose=for-rent"}
        imageUrl={
          "https://i.pinimg.com/564x/b3/f7/24/b3f72436cbbc7c71987f2cb7addbc757.jpg"
        }
      />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        width={"1300px"}
        marginX={"auto"}
      >
        {propertiesForRent?.map((property) => (
          <Box flex="1 1 calc(33.333% - 20px)" key={property.id}>
            <Property property={property} />
          </Box>
        ))}
      </Flex>

      <Banner
        purpose="BUY A Home"
        title1="Find and Own Your Dream Home"
        title2="For All Budgets"
        desc1={"Find the perfect Apartments home for you"}
        desc2={"Explore the best homes for Buy "}
        buttonText={"View Buy Homes"}
        linkName={"/search?purpose=for-sale"}
        imageUrl={
          "https://i.pinimg.com/564x/f3/ec/c8/f3ecc8128e5e79e1c953b9dbf85a1f6c.jpg"
        }
      />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        width={"1300px"}
        marginX={"auto"}
      >
        {propertiesForSale?.map((property) => (
          <Box flex="1 1 calc(33.333% - 20px)" key={property.id}>
            <Property property={property} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`
  );
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`
  );

  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
