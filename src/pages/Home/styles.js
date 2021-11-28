import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 78vh;

  div {
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      flex-direction: column;
      height: 220px;
      margin: 40px;
      flex-wrap: wrap;
      border: 3px solid transparent;
      border-color: gray;
      padding: 10px;
      width: 170px;
      border-radius: 15px;

      img {
        width: 130px;
        height: 130px;
        margin: 0 auto;
        backface-visibility: hidden;
      }

      strong {
        font-size: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin-top: 10px;
      }

      span,
      button {
        margin-top: 6px;
      }

      span {
        font-size: 18px;
      }

      button {
        background-color: #808080;
        color: white;
        border-radius: 10px;
        font-size: 20px;
        border: 2px solid gray;
        margin-top: auto;
        padding: 2px;
        cursor: pointer;
      }
    }

    section:hover {
      transition: 0.5s;
      background-color: #808080;

      img {
        transition: 1s;
        border-radius: 50%;
      }

      span,
      strong {
        color: white;
      }

      button {
        background-color: white;
        color: gray;
        transition: 0.2s;
        font-weight: bold;
      }
    }
  }
`;
