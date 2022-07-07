import React from "react";
import {
  Projects,
  Text,
  Heading,
  Subheading,
  Image,
  Description,
  Container,
} from "./projects.styles";

function Work() {
  return (
    <div>
      <Container>
        <Projects>
          <Image></Image>
          <Text>
            <Heading>Stocate</Heading>
            <Subheading>Retail Assistant</Subheading>
            <Description>Beacons is a project.</Description>
          </Text>
        </Projects>

        <Projects>
          <Image></Image>
          <Text>
            <Heading>DCXS Pickit</Heading>
            <Subheading>Retail Assistant</Subheading>
            <Description>Beacons is a project.</Description>
          </Text>
        </Projects>

        <Projects>
          <Image></Image>
          <Text>
            <Heading>DCXS Beacons</Heading>
            <Subheading>Retail Assistant</Subheading>
            <Description>
              I worked to redesign their previous UI to better suit the needs of
              the product. My main focus being usability and accessability
              changes, as well as cosmetic changes to better suit the branding
              for their first mobile product.
            </Description>
          </Text>
        </Projects>
      </Container>
    </div>
  );
}

export default Work;
