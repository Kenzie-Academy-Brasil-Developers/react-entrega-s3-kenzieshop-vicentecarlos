import styled from "styled-components";

export const Div = styled.div`
  background-color: gray;
  height: 100px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2,
  p,
  button {
    margin-top: 10px;
  }

  h2,
  p {
    color: white;
  }

  button {
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 10px;
  }

  button:hover {
    transition: 0.5s;
    color: white;
    background-color: darkgrey;
    cursor: pointer;
  }
`;
