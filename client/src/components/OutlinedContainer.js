import styled from "@emotion/styled";

const OutlinedContainer = styled.div`
  border: solid var(--highlight-color) 7px;
  border-radius: 20px;
  height: 80%;
  width: 90%;
  padding: 2em;
  background-image: linear-gradient(
    180deg,
    var(--highlight-color),
    transparent
  );
`;

export default OutlinedContainer;
