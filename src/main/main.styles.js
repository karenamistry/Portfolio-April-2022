import styled from "styled-components";

export const Empty = styled.div`
  width: 100vw;
  height: 10vh;
  display: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: paleturquoise;
`;

export const Container = styled.div`
  margin: auto;
  width: 1200px;
  // background-color: palegoldenrod;
`;

export const Sticky = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 950px;
  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  padding: 0% 2% 0% 0%;
  box-sizing: border-box;
  // background-color: palegreen;
  &:nth-child(2) {
    height: auto;
    // background-color: papayawhip;
  }
`;

export const Intro = styled.div``;

export const Tag = styled.div`
  font-size: 16px;
  color: #f8f8f9;
  background-color: #6f58fc;
  padding: 1.5% 2.5%;
  border-radius: 100px;
  width: fit-content;
  margin-bottom: 4%;
  filter: drop-shadow(0px 12px 50px rgba(82, 0, 255, 0.3));
  -webkit-filter: drop-shadow(0px 12px 50px rgba(82, 0, 255, 0.3));
`;

export const Title = styled.div`
  font-size: 52px;
  font-family: "GeneralSans-Medium";
  line-height: 1.18;
`;

export const List = styled.div`
  margin: 4% 0%;
`;

export const Item = styled.div`
  padding: 3% 0%;
  border-top: solid 1px lightgray;
  &:nth-child(3) {
    border-bottom: 1px solid lightgray;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 400px;
  background-color: black;
  display: none;
`;

export const Experience = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  display: none;
`;

export const Left = styled.div``;

export const Company = styled.div`
  font-size: 14px;
  color: gray;
`;

export const Role = styled.div``;

export const Right = styled.div``;

export const Year = styled.div`
  font-size: 14px;
`;
