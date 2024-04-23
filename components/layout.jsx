import Head from "next/head";
import Navbar from "./navbar";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Hero from "./hero";
import Team from "./team";
import SocialIcons from "./socials";
import Testimonial from "./tesrmonials";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kejani Real Estate</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box
        maxWidth={"1280px"}
        marginX="auto"
        color={"#71BF97"}
        width="100%"
        minHeight={"100vh"}
        bg={"#e9f0ec"}
      >
        <header>
          <Navbar />
        </header>
        <Hero />
        <SocialIcons />
        <main>{children}</main>
        <Testimonial />
        <Team />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
