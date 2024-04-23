import Link from "next/link";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Flex,
  Box,
  Spacer,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FiKey } from "react-icons/fi";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <Flex
      p={"2"}
      borderBottom={"1px"}
      bg={"#174149"}
      position="fixed"
      top="0"
      zIndex="1000"
      w={"100%"}
    >
      <Link href={"/"}>
        <Box as="span" paddingLeft={"2"} fontSize={"2xl"} fontWeight={"bold"}>
          Kejani_Homes
        </Box>
      </Link>
      <Spacer />
      <Box left={"50%"}>
        <Menu>
          <MenuButton
            as={IconButton}
            rightIcon={<FcMenu />}
            colorScheme="teal"
            variant={"outline"}
            size={"lg"}
            width="100px"
          >
            Menu
          </MenuButton>
          <MenuList>
            <Link href={"/"} passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href={"/search"} passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href={"/search?purpose=for-sale"} passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href={"/search?purpose=for-rent"} passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
