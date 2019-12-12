import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ReversedButton = props => (
  <button {...props} children={props.children.split("").reverse()} />
);

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Thing = styled.button`
  color: blue;

  ::before {
    content: "🚀";
  }

  :hover {
    color: red;
  }
`;

const King = styled.div.attrs(() => ({
  tabIndex: 0
}))`
  color: blue;

  .something-inside {
    border: 1px solid;
    display: block;
  }

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }
`;

const InputPassword = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em"
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const TestScreen = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 10em;
  will-change: transform, opacity;
`;

const testScreens = [
  style => (
    <TestScreen style={{ ...style, background: "#b3FFBD" }}>
      Im number 1
    </TestScreen>
  ),
  style => (
    <TestScreen style={{ ...style, background: "#B2DBBF" }}>
      Im number 2
    </TestScreen>
  ),
  style => (
    <TestScreen style={{ ...style, background: "#12DBBF" }}>
      Im number 3
    </TestScreen>
  )
];

const Container = styled.div`
  height: 600px;
  position: relative;
  width: 100%;
`;

const Test = () => {
  const propsOpacity = useSpring({ opacity: 1, from: { opacity: 0 } });
  const propsNumber = useSpring({ number: 1, from: { number: 0 } });
  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <Container
        onClick={() => (index === 2 ? setIndex(0) : setIndex(index + 1))}
      >
        <Transition
          reset
          unique
          items={index}
          from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
          leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
        >
          {index => testScreens[index]}
        </Transition>
      </Container>

      <animated.div style={propsOpacity}>I will fade in</animated.div>
      <animated.span>{propsNumber.number}</animated.span>

      <Wrapper>
        <Title>Hello Styled Components!</Title>
      </Wrapper>
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Button as={ReversedButton}>Custom Button</Button>
      </div>
      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>
      <div>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geenlen" type="text" inputColor="rebeccapurple" />
      </div>
      <div>
        <Thing>Hello world!</Thing>
      </div>
      <div>
        <King>Hello world!</King>
        <King>How ya doing?</King>
        <King className="something">The sun is shinning...</King>
        <div>Pretty nice day today.</div>
        <King>Don't you think?</King>
        <div className="something-else">
          <King>Splendid.</King>
        </div>
      </div>
      <div>
        <King>
          <label htmlFor="foo-button" className="something-inside">
            Mystery button
          </label>
          <button id="foo-button">What do I do?</button>
        </King>
      </div>
      <div>
        <InputPassword placeholder="A small text input" />
        <br />
        <InputPassword placeholder="A bigger text input" size="2em" />
      </div>
      <div>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </div>
    </Layout>
  );
};

export default Test;
