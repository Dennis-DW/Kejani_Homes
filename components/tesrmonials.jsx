import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = () => {
  return (
    <Box as="section" className="testimonial text-center" textAlign="center">
      <Box as="div" className="container">
        <Box as="div" className="heading white-heading">
          Testimonial
        </Box>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={2000}
        >
          <div>
            <Box className="testimonial4_slide">
              <Image
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="img-circle img-responsive"
                borderRadius="full"
              />
              <Text textAlign="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text as="h4">John Waddrob</Text>
              <Text style={{ color: "gold", fontSize: "20px" }}>
                ★★★★☆
              </Text>{" "}
              {/* 4 out of 5 stars */}
            </Box>
          </div>
          <div>
            <Box className="testimonial4_slide">
              <Image
                src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="img-circle img-responsive"
                borderRadius="full"
              />
              <Text textAlign="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text as="h4">Faith Mulinge</Text>
              <Text style={{ color: "gold", fontSize: "20px" }}>
                ★★★☆☆
              </Text>{" "}
              {/* 3 out of 5 stars */}
            </Box>
          </div>
          <div>
            <Box className="testimonial4_slide">
              <Image
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                className="img-circle img-responsive"
                borderRadius="full"
              />
              <Text textAlign="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
              </Text>
              <Text as="h4">Clerk Morison</Text>
              <Text style={{ color: "gold", fontSize: "20px" }}>
                ★★★★★
              </Text>{" "}
              {/* 5 out of 5 stars */}
            </Box>
          </div>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonial;
