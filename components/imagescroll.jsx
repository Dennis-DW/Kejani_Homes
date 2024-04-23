import { Box, Flex, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "react-horizontal-scrolling-menu/dist/styles.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginRight={"1"}>
      <Icon
        as={FaArrowAltCircleLeft}
        fontSize={"2xl"}
        onClick={() => scrollPrev()}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginLeft={"1"}>
      <Icon
        as={FaArrowAltCircleRight}
        fontSize={"2xl"}
        onClick={() => scrollNext()}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          key={item.id}
          data-item-id={item.id}
          w={"910px"}
          overflow={"hidden"}
          padding={"2"}
        >
          <Image
            alt="Property Image"
            _placeholder={"blur"}
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={100}
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
