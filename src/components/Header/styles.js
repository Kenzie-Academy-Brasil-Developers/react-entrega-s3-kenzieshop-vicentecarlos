import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: gray;
  padding: 20px;
  flex-direction: row;
  align-items: center;

  h1 {
    font-weight: bold;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: white;
    font-size: 20px;
  }

  div {
    display: flex;

    span {
      border-radius: 100%;
      background-color: darkgray;
      width: 12px;
      height: 15px;
      padding: 2px;
      color: white;
      margin-right: 4px;
      text-align: center;
    }

    button {
      border: none;
      background-color: #808080;
      font-size: 18px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: darkgray;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
  }
`;
