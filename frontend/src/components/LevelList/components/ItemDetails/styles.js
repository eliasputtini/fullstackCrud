import styled from "styled-components";
import { animated } from "react-spring";

// Styled comps
const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  height: 100%;
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
  padding-bottom: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Front = styled(animated.div)`
  background-size: cover;
  background-color: #ffa;
  position: absolute;
  width: 360px;
  height: 360px;
  will-change: transform, opacity, display;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Back = styled(animated.div)`
  background-size: cover;
  background-color: #ffa;
  position: absolute;
  width: 360px;
  height: 360px;
  will-change: transform, opacity, display;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export { User, UserInfo, Title, Avatar, Front, Back, Form };
