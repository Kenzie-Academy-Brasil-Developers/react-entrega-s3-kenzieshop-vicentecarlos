import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 15vh;
  flex-wrap: wrap;
`;

export const DivSection = styled.div`
  border: 5px solid gray;
  width: 20vw;
  height: 50vh;
  border-radius: 10px;
  overflow: scroll;
  padding: 10px;
  h2 {
    text-align: center;
    margin-top: 13px;
    font-weight: bold;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 4px solid black;
    width: 180px;
    padding: 18px;
    border-radius: 100%;

    img {
      width: 120px;
      height: 120px;
    }

    strong,
    span {
      margin-top: 10px;
    }
  }
`;
