import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 1rem;
  position: fixed;
  width: 100vw;
  z-index: 100;
`;
export const Box = styled.div`
  background-color: #6f58fc;
  width: 45px;
  height: 45px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  filter: drop-shadow(0px 18px 50px rgba(82, 0, 255, 0.3));
  -webkit-filter: drop-shadow(0px 18px 50px rgba(82, 0, 255, 0.3));
`;
export const Line = styled.div`
  background-color: #a8a6ff;
  width: 18px;
  height: 4px;
  border-radius: 1px;
`;
