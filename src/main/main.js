import React from "react";
import {
  Empty,
  Content,
  Splash,
  Door,
  Photo,
  Container,
  Sticky,
  Intro,
  Tag,
  Title,
  List,
  Item,
  Experience,
  Left,
  Company,
  Role,
  Right,
  Year,
} from "./main.styles.js";

function Main() {
  return (
    <div>
      <Empty></Empty>
      <Content>
        <Container>
          <Sticky>
            <Intro>
              <Tag>Hi. I'm Karena.</Tag>
              <Title>
                I create meaningful digital interfaces, that aim to understand
                the people using them.
              </Title>
            </Intro>

            <List>
              <Item>
                Currently a Product Designer at Stocate & Dynamic CXS.
              </Item>
              <Item>UR, UX, UI, Digital Marketing, Copywriting.</Item>
              <Item>
                4 + years of experience designing for startups in Ottawa,
                Toronto & Montreal.
              </Item>
            </List>

            <Experience>
              <Left>
                <Role>Product Designer, Internship</Role>
                <Company>Stocate</Company>
              </Left>
              <Right>
                <Year>2022 - Current</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Product Designer, Freelance</Role>
                <Company>Dynamics CXS</Company>
              </Left>
              <Right>
                <Year>2021 - Current</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Content Strategist</Role>
                <Company>Instasnacks</Company>
              </Left>
              <Right>
                <Year>2021 - 2022</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Content Strategist</Role>
                <Company>Casper Kitchen</Company>
              </Left>
              <Right>
                <Year>2021 - 2022</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Graphic Designer</Role>
                <Company>Lil Helper</Company>
              </Left>
              <Right>
                <Year>2018 - 2019</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Graphic Designer</Role>
                <Company>York U Printing</Company>
              </Left>
              <Right>
                <Year>2017 - 2018</Year>
              </Right>
            </Experience>

            <Experience>
              <Left>
                <Role>Cash</Role>
                <Company>Canadian Tire</Company>
              </Left>
              <Right>
                <Year>2016</Year>
              </Right>
            </Experience>
          </Sticky>
        </Container>

        <Splash>
          <Door>
            <Photo></Photo>
          </Door>
        </Splash>
      </Content>
    </div>
  );
}

export default Main;
