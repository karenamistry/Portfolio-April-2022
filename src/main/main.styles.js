import styled from "styled-components";

export const Empty = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Splash = styled.div`
  background-color: white;
  width: 500px;
  height: 90vh;
  display: flex;
  justify-content: flex-end;
`;

export const Door = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f9;
  border-radius: 175px 3px 0px 0px;
`;

export const Photo = styled.div``;

export const Sticky = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 650px;
  height: 90vh;
  position: sticky;
  position: -webkit-sticky;
  padding: 0% 2%;
  box-sizing: border-box;
`;

export const Intro = styled.div``;

export const Tag = styled.div`
  font-size: 16px;
  color: #f8f8f9;
  background-color: #6f58fc;
  background-color: black;
  padding: 1.5% 2.5%;
  border-radius: 100px;
  width: fit-content;
  margin-bottom: 8%;
  filter: drop-shadow(0px 12px 50px rgba(82, 0, 255, 0.3));
  -webkit-filter: drop-shadow(0px 12px 50px rgba(82, 0, 255, 0.3));
`;

export const Title = styled.div`
  font-size: 34px;
  font-family: "GeneralSans-Medium";
  line-height: 1.2;
`;

export const List = styled.div`
  margin: 8% 0%;
`;

export const Item = styled.div`
  padding: 3% 0%;
  border-top: solid 1px gray;
  &:nth-child(3) {
    border-bottom: 1px solid gray;
  }
`;

export const Experience = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
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
