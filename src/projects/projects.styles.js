import styled from "styled-components";

export const Container = styled.div`
  // background-color: #f8f8f9;
`;

export const Contents = styled.p`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  margin: auto;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  position: -webkit-sticky;
  width: 550px;
  margin-right: 50px;
`;

export const Image = styled.div`
  background-color: black;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const Subheading = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: #9a9a9a;
`;

export const Description = styled.p`
  margin: 2% 0%;
  padding: 0;
  line-height: 1.6;
`;
