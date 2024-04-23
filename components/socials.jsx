import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Icon, Flex } from "@chakra-ui/react";

const SocialIcons = () => {
  return (
    <div className="social">
      <Flex direction="column" align="center" justify="center" h="100%">
        <ul className="list-unstyled">
          <li>
            <a href="https://www.twitter.com">
              <Icon
                as={FontAwesomeIcon}
                icon={faTwitterSquare}
                boxSize="24px"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <Icon
                as={FontAwesomeIcon}
                icon={faFacebookSquare}
                boxSize="24px"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <Icon as={FontAwesomeIcon} icon={faLinkedin} boxSize="24px" />
            </a>
          </li>
        </ul>
      </Flex>
    </div>
  );
};

export default SocialIcons;
