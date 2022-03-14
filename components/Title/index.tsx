import styled from "styled-components";

interface TitleProps {
  children: string;
  element?: "h2" | "h3";
}

const Title = ({ children, element = "h2" }: TitleProps) => {
  return <TitleEl as={element}>{children}</TitleEl>;
};
export default Title;

const TitleEl = styled.h2`
  display: inline-block;
  margin-bottom: 25px;
  color: #222;
  font-weight: bold;
  letter-spacing: -1px;
`;
