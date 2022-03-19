import styled from "styled-components";

// Styled comps
const User = styled.div`
  padding: 24px;
  border: 1px solid transparent;
  border-radius: 12px;
  transition: 200ms ease;
  margin: 24px;
  cursor: pointer;

  &:hover {
    border: 1px solid #ddd;
    border-radius: 12px;
  }
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-image: ${(props) =>
    `url(https://avatars.dicebear.com/api/croodles-neutral/:${
      props.image.split(" ")[0]
    }.svg)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export { User, Title, Avatar };
